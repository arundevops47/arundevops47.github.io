# Troubleshooting Email Notifications

If email notifications are not working as expected this article covers some things that you can check.

If a user is NOT receiving email notifications start from Check 1. If you have users that are getting email notifications that they shouldn't then you can skip the first 2 and start from Check 3.

 

**Check 1**: Make sure the users' email address in their user account setup is set correctly and there are no typos. You should also confirm that emails sent to this address do not bounce. If emails are bouncing then the email address will be added to a suspension list. You will need to make sure it no longer bounces and then contact support to have it removed from the suspension list. 

**Check 2**: If not receiving a notification, users should check their spam or junk folder. If the email is found there, then they should mark it as 'not junk' or drag it to Inbox.  Make sure to add the  the sender email address (typically ***notifications@mantishub.io***) to their contacts or email whitelist.  Some providers have an option to not treat future emails from this as spam. For Office365 users, check 'Clutter' folder, and if found there, move back to inbox.

**Check 3**: Make sure your [email notification configuration](/issue_management/config_email_notifs) is correct. Remember that you have different levels of email notifications settings and more specific settings will override more global settings. Check your settings: 

- For all projects where the [project selector](/project_management/project_selector) is set to "All Projects"
- For specific projects where the [project selector](/project_management/project_selector) only shows the specific project. These settings will overrides 'All Projects' settings, and
- Within the user 'My Account' preferences. These settings can disable notifications enabled in the project configuration but will not turn on notifications that have been disabled in the project settings.

**Check 4**: If your notifications are based on users access level, remember that a user can have a global access level and a different access level for a specific project so make sure this aligns with your notification settings.

**Check 5**: If you're missing a notification then, make sure that the action that is supposed to trigger the notification took place OR if you're getting an unwanted notification, check what action triggered it.  To do either of these, an administrator will need to turn on the [Event Log](/system_management/event_log_email_notifs). This will show you when the action occurred, who triggered it and the notification list. Turn this on when you need to troubleshoot email notification issues, then turn it off once you are done.

**Check 6**: If event log shows that the recipient was included for notification, but they didn't receive it, then you have verified it was sent from the MantisHub system. It may be an issue with their email system or rules.

**Check 7**: If all this checks out and you're still not getting the correct email notification, now's the time to call in the big guys. [Contact support](/user_management/contact_support) and make sure you include the following information if relevant:

- The **issue id** in questions or if more than one issue is affected provide a couple of examples.
- The **action** that was taken that triggered or should have triggered the notification,
- The **user** affected and if possible, a user who has received notifications correctly for comparison.
- Projects/issues for which the affected user receives notifications correctly.
- If the affected user ever received any notifications from MantisHub.
- If other users in the same company/domain are receiving notifications correctly.