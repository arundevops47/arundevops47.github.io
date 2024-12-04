# Authorization and Access Levels

MantisHub uses access levels to define what a user can do. Each user account has a global or default access level that is associated with it. This access level is used as the access level for all actions associated with public projects, unless the user has been specifically added to the public project with a more specific access level. Access levels defined at the project will override global access levels.

Users that are not administrators, will not have access to private projects unless added explicitly to those projects. The users access to a private project can be lower or higher than their global access level.

Following are the access levels in MantisHub and their typical usage. Note that each level has all the priviledges of the ones before it.

- **Viewer** - login and view issues.
- **Reporter** - report issues and comments on issues.
- **Updater** - a user who can update issues.
- **Developer** - a team member who is able to view [private issues](/issue_management/public_vs_private_issues), take ownership of issues and view reports.
- **Manager** - ability to manage a project including project details, who has access to it, categories, versions, and custom fields.
- **Administrator** - all administration tasks and communication with MantisHub support team.

Learn more from our [video tutorial.](https://youtu.be/6CMHpk-S_FQ)

<iframe width="560" height="315" src="https://www.youtube.com/embed/6CMHpk-S_FQ?si=pSK6otfFLuCRzRec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
