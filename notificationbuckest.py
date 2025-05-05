import pandas as pd
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import os

def analyze_notifications(input_path='data/NotificationRecipient.csv', output_path='data/notification_output.csv'):
    # Load the CSV file
    df = pd.read_csv(input_path)
    
    # Ensure SentDate is in datetime format
    df['SentDate'] = pd.to_datetime(df['SentDate'])
    
    # Create week number from SentDate
    df['Week'] = df['SentDate'].dt.isocalendar().week
    
    # Explode the LocationIds column (assuming comma-separated values)
    # Create a temporary column with lists
    df['LocationIdsList'] = df['LocationIds'].str.split(',')
    
    # Explode the dataframe so each LocationId gets its own row
    exploded_df = df.explode('LocationIdsList')
    
    # Strip any whitespace from the LocationIds
    exploded_df['LocationId'] = exploded_df['LocationIdsList'].str.strip()
    
    # Group by LocationId and Week to count notifications
    weekly_counts = exploded_df.groupby(['LocationId', 'Week']).size().reset_index(name='NotificationCount')
    
    # Count number of weeks each LocationId received notifications
    weeks_count = weekly_counts.groupby('LocationId').size().reset_index(name='WeeksWithNotifications')
    
    # Calculate average weekly notifications per LocationId
    avg_weekly = weekly_counts.groupby('LocationId')['NotificationCount'].mean().reset_index()
    
    # Merge with weeks count
    avg_weekly = pd.merge(avg_weekly, weeks_count, on='LocationId')
    
    # Create 5 equal-sized buckets (quintiles)
    avg_weekly['Bucket'] = pd.qcut(avg_weekly['NotificationCount'], 5, labels=False)
    
    # Calculate bucket statistics
    bucket_stats = avg_weekly.groupby('Bucket')['NotificationCount'].agg(['min', 'max', 'mean', 'count']).reset_index()
    
    # Visualize the distribution
    plt.figure(figsize=(12, 6))
    
    # Histogram of notification counts
    plt.subplot(1, 2, 1)
    plt.hist(avg_weekly['NotificationCount'], bins=20, edgecolor='black')
    plt.title('Distribution of Weekly Notifications per Recipient')
    plt.xlabel('Average Weekly Notifications')
    plt.ylabel('Number of Recipients')
    
    # Boxplot by bucket
    plt.subplot(1, 2, 2)
    plt.boxplot([avg_weekly[avg_weekly['Bucket'] == i]['NotificationCount'] for i in range(5)])
    plt.title('Notification Distribution by Bucket')
    plt.xlabel('Bucket (Quintile)')
    plt.ylabel('Weekly Notifications')
    
    plt.tight_layout()
    plt.savefig('notification_analysis.png')
    
    # Ensure the output directory exists
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Save the results to CSV
    avg_weekly.to_csv(output_path, index=False)
    
    print(f"Analysis complete. Results saved to {output_path}")
    
    return {
        'raw_data': avg_weekly,
        'bucket_stats': bucket_stats,
        'total_recipients': len(avg_weekly),
        'recipients_per_bucket': len(avg_weekly) // 5
    }

# Run the analysis with the specified input file
results = analyze_notifications()
print("Bucket statistics:")
print(results['bucket_stats'])
print(f"Total recipients: {results['total_recipients']}")
print(f"Recipients per bucket: {results['recipients_per_bucket']}")
