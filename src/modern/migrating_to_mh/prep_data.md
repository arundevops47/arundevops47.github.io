# Preparing Data For Migration

As you are going through the [steps to migrate your data](/migrating_to_mh/migrate_data) into MantisHub, you'll get to a point where you need to look at preparing your data for migration. 

We assume at this point that you have [verified that your MantisBT setup is supported](/migrating_to_mh/migrate_data) for migration into MantisHub and they you have made provisions for any non-supported aspects. 

Once you're ready to proceed, contact support with your preferred migration date and a contact point and they will arrange an engineer and confirm a date for your migration. We typically schedule migrations over the weekend to avoid service interruptions for your users but please let them know if you have other requirements.

The support team will also provide a dropbox link to upload your data.  

Next you'll need to get a dump of your database. Before doing this we suggest you disable inactive users that no longer need access to Mantis. This may reduce [user pack costs](/plans_billing/storage) for your MantisHub subscription. Note that you should [disable inactive users](/user_management/disable_accounts) and NOT delete them. 

To create a dump of your database, run the following command. Remember to replace the parameters between the square brackets with your real values:

`mysqldump -u [database_user] -p[database_password] [database_name] > [mysql_dump_file_path]`

Copy into your shared folder:

1. A zip file of the MantisBT folder including all php files and all configuration files like config_inc.php, custom_strings_inc.php (optional), custom_constants_inc.php (optional), custom_relationships_inc.php (optional).
2. A zip file for the MySQL dump.
3. If attachments are not in the database dump and the MantisBT folder, then provided a zip file of the attachments folder.

Your migrated data will be available for you before Monday morning and your engineer will have reached out to your contact point to verify your MantisHub data. Users will also be able to login to MantisHub with the same user names and passwords they previously used to access the migrated MantisBT. Your engineer will be available for the next few days to make any necessary corrections.  