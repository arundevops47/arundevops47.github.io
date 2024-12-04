# MS SQL and PostgreSQL Conversion to MySQL

For customers wishing to utilize our migration services but whose current MantisBT database is MS SQL or PostgreSQL, it's possible to convert your database over to MySQL. 

**Backup your MantisBT data (don't skip this step!)**

- Backup MantisBT code, config, and database.  This is important to make sure that if something goes wrong with the conversion process, you are able to revert back to a working state.

**Move attachments to disk**

If attachments are not already stored on disk, follow the steps below:

- Upgrade to latest MantisBT and *keep 'admin' folder*.
- Create a folder to place attachments into
- Make sure the attachments folder writable to your web server user
- Set config variable `$g_absolute_path_default_upload_folder` to folder path (terminate with / or \ based on OS) in config_inc.php.
- Set config variable `$g_file_upload_method` to `DISK` instead of `DATABASE` (no quotation marks around it) in config_inc.php.
- Login to your MantisBT as administrator.
- Go to http://path/to/mantisbt/admin/
- Select `System Utilities` and `Move Attachments to Disk`.
- Select all checkboxes under `To Disk`and click `Move Attachments`.
- Verify that attachments were exported to the uploads folder defined above.
- Test MantisBT and make sure attachments are accessible and not corrupt.

**Convert DB to MySQL**

- Use [MySQL Workbench](https://www.mysql.com/products/workbench/) to convert the DB to MySQL.
- Make sure that all tables get converted. Sometimes Workbench will allow you to skip tables that it was unable to convert. In these cases it will provide warnings. You will need to address the issues raised in the warning to successfully convert all tables.

**Create zip files and upload them**

- Create `mantisbt.zip` file for code + configs
- Create `mantisdb.zip` file for db SQL dump.
- Create `mantisattach.zip` file with all attachments.

Upload the 3 zip files to the file request link provided to you by MantisHub team.