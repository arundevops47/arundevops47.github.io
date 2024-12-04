# Deleting a Category

The following steps explains how to delete a category that was already used to report issues:

- Go to View Issues page
- Filter on all issues under the category, make sure to set Hide Status to None to include closed issue.
- Select all issues in the view using the select all checkbox next to the dropdown at the bottom left.
- Select "Update Category" from the bottom left drop down and select the alternate category.
- Repeat until there are no more matching issues.
- Go to Manage - Manage Projects - [ProjectName] and then delete the category.


We strongly recommend that you do not delete the pre-defined global category '[All Projects] General' as it is used as the category when [reporting issues via email](/mantishub_helpdesk/report_email). If this category is deleted, your email reported issues and [Helpdesk issues](/mantishub_helpdesk/config_plugin) will be rejected.  It is also used as the default category when [moving issues between projects](/issue_management/moving_issues) where the source category doesn't exist in the target project. In the event it is accidentally deleted and your email reported issues are getting rejected, you can nominate an alternative general category for these issues as per the [change default category](/project_management/change_default_catgs) process.