# Auto-complete for users and issue IDs

Auto-complete is enabled in MantisHub to help you automatically fill in usernames and/or issue IDs within your issues.

Auto-complete is supported within a MantisHub issue for:

- Usernames within the "Users [monitoring](/issue_management/issue_actions) this issue" section.
- Usernames when using [`@` user mentions](/issue_management/mention_notifications) in issue notes, description or summary. 
- Issue IDs when using the `#` key reference in issue notes, description or summary
- Issue IDs within the ["Relationships"](/issue_management/linking_issues) section 

Note that auto-complete does **not** provide a full list of all users or all issues since these lists would be quite long and make auto-complete unusable. MantisHub auto-complete contains intelligence to provide relevant suggestions. It will display:

- Users involved with an issue (e.g. reporter, handler, those who have added notes, monitoring users etc)
- Users with access level developer and above for the project to which the issue belongs.
- Issue IDs that have been recently viewed.
- Issue IDs related to that issue.