# Password Strength Plugin

MantisHub recommended solution for implementing login rules and policies is to use our Single-Sign-On (SSO) integrations. This allows you to implement more advances login policies including 2FA which is highly utilized. Read more about the advantages of our SSO integrations [here](/plug_ins/config_authhub) or head directly to the setup documentation listed below for your chosen supported provider. 

- [Bitbucket (SSO)](/plug_ins/bitbucket)
- [GitHub (SSO)](/plug_ins/github)
- [Google & G-Suite Authentication (SSO)](/plug_ins/google_auth)
- [Azure AD/Office 365 Authentication (SSO)](/plug_ins/azuread)

However, as there are no specific requirements around MantisHub account passwords, if you simply wish to make sure your users create stronger passwords, we do offer the **Password Strength** plugin (available with qualifying plans). 

Activating this plugin will not impact existing passwords. However, if a new user is created or an existing user resets their password then new password creation parameters will be enforced. 

The password plugin will require that passwords:

- MUST contain at least 8 characters
- MUST contain at least 1 uppercase letter
- MUST contain at least 1 lowercase letter
- MUST contain at least 1 number
- MUST contain at least 1 special character (Note: the '_' underscore character is not considered a special character)

**How to install:**

Administrators can install the plugin by going to Manage - Manage Plugins and clicking the 'Install' button next to the PasswordStrength plugin listed under Available Plugins. 

