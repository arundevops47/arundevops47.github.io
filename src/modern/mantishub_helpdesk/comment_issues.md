# Commenting On Issues By Replying To Notifications

MantisHub provides users with notifications about changes that are of interest to them.  It is often the case that as users read such emails they want to provide a quick response from within their mail client.  Such replies are reflected as issue notes (comments) on the appropriate issue within MantisHub.

The goals of this feature is to enable users to do the following:

1. Reply with the comment to be added to the issue.
2. Reply with a comment and add others?
3. Others that are included, can reply to the reply and their messages are going to be added properly as comments.

To achieve the above goals, the messages are stamped with a reply-to header that points to the issue associated with the notification.  This way when replies happen the unique part at the top of the message are added to the targeted issue with no ambiguity.

In addition to the issue number being included in the reply to address, the reply to address also include a hash that confirms that this is an email that was sent in response to a notification.  This enables MantisHub to protect against spam.  The reply-to addresses will look as follows for a MantisHub with the name "greatsoftware":

`greatsoftware+1234-2613625338f7023cce84723439a97531@mantishub.com`

- greatsoftware - is the MantisHub subdomain.
- 1234 - is the issue number.
- 2613625338f7023cce84723439a97531 - is a hash that is specific to issue 1234.

Hence, even though this feature will enable replying to notifications to add comments, it doesn't allow composing new emails that targets issues the same way we support authoring new emails that target projects and end up being added as new issues.