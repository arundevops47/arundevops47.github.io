# Estimating Disk Space Requirements
MantisHub plans have various storage allowances so when looking to migrate your existing database, getting an estimate on what storage you need will be useful to help select the appropriate plan. 

The disk space covers three aspects:

- The database
- The attachments (if not part of the database)
- The user backup is created upon administrator request (which is a compressed version of the two above). - This is NOT counted toward your storage allocation. 

For your migration, you will need to [prepare your data.](/migrating_to_mh/prep_data) So you'll be creating a file of this information ready for migrations.

If you currently save attachments to disk, then the size of this folder x 2 combined with your database size x 2 is a good approximation of the space you need.

If you save attachments to the database, then dump the SQL database, and the size of this file x 2 is a good approximation of the space you need.

You should note that even if you do exceed the plan allowance you won't be prevented from storing your data, we'll simply add the necessary storage to your account for an extra fee ($3.60 per gig per month or $33 per gig per year if you pay annually).  You may also upgrade to the next plan which has a higher allowance.