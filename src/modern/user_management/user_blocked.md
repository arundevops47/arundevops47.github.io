# User Blocked to Avoid Spam (Rate Limiting)

MantisHub has anti-spam rate limit features that protects accounts that enable signup from having a malicious user from signing up and then starting to spam your MantisHub with comments, issues, etc.

By default there is a rate limit of 10 actions per minute.  The actions include the following changes:

- Reporting an issue
- Adding a comment
- Adding a tag
- Attaching a file

The rate limit applies to a user if the following conditions are true:

- MantisHub account enables signup
- User has the default signup access level (by default REPORTER).

In order to work around this, one of the following actions can be done:

- Upgrade the user to an access level above REPORTER or use a different user to do batch actions.
- Increase the limit or disable the feature - Go to "Manage - Manage Configuration - Configuration Report" and add the following config: All Projects, All Users, antispam_max_event_count, integer, 50
- The time window can be changed as well - Go to Manage - Manage Configuration and add the following config: All Projects, All Users, antispam_time_window_in_seconds, integer, 10

Note that the feature can be completely disabled by setting the antispam_max_event_count to 0.