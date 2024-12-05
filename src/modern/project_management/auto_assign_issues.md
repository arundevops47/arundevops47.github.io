# Automatically Assigning Issues Based on Category

In "Manage" => "Manage Projects" => [ProjectName], under categories section you can "Edit" categories and select to whom ("Assigned To") tickets under each category should be assigned to. With this, if someone forgets to assign ticket it will get automatically assigned to the 'default' person. This person is considered the 'category owner' for the purpose of email notifications. 

For teams that want to assign an issue to a team rather than a specific person, a team user can be created (e.g. JavacriptTeam) in MantisHub that gets assigned the issue in the Javascript category.  This team user can have the email address set to a distribution group that has the users that should be notified when notifications are sent to the team user.