# Public vs. Private Issues

It is often the case where developers and end users are collaborating on the same project.  Even though users are able to see all issues, it is often required for a set of issues to be marked as private.  This can be a security issue that is not yet disclosed or a customer sensitive issue, where the end-user needs to mark it as private so only developers can see it and not other end users.


This can be achieved using the 'view status' field which can be:

- **Public** - means all users who can access the project can see this issue.
- **Private** - means that users with access level higher or equal to a specific threshold (typically DEVELOPER) can view the issue.  The reporter of the issue will also see it, independent of their access level.

By default issues are public, to mark issues as private by default please see the [Marking issues and issue notes as private by default](/issue_management/privating_issues) article. 