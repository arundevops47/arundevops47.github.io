# Enabling Email Notifications For Own Actions

By default MantisHub excludes currently user from notifications due to their actions. This behavior can be changed via the “Manage - Manage Configuration - Configuration Report” page. Select "Create Configuration Option" and enter the following settings:

**Username**: All Users

**Project Name**: All Projects

**Configuration Option:** email_receive_own

**Type**: integer

**Value**: 1

`All Projects, All Users, email_receive_own, Integer, 1`