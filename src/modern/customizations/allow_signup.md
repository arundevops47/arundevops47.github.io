# Allowing Users to Signup For Access to MantisHub

For open source and freeware projects, it is very common to setup MantisHub so that users can signup for an account and get REPORTER access. The signup process is disabled by default.

When users signup, administrators get a notification with the details of the user that signed up. Information about the user like user name, email address, IP address are included in the email notification.

The newly signed up users will have reporter access level by default and will get to see public issues in all public projects.  However, they won't get access to view private issues or issues within private projects.  For them to access private projects, the project manager will have to add them explicitly.

It is recommend to test this feature and make sure that such users only see the issues and projects you expect them to see.

Administrators of paid accounts can enable users to sign up to their MantisHub. This can be done by emailing the request to support@mantishub.com.

Once you've turned on this feature, you can also have customer accounts created in your MantisHub using single [sign-on (SSO)](/plug_ins/config_authhub) with supported vendors.



