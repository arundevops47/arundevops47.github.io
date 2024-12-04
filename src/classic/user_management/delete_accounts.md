# Deleting User Accounts

The recommended way to retire a user is to [disable](https://support.mantishub.com/user_management/disable_accounts#disabling-user-accounts) them. However, you can also delete a user.  Deleting a user is NOT reversible and is only recommended for accounts that have not been active, i.e. haven’t reported/handled issues. Once an account is deleted, any issues or actions associated with the account will be associated with a user ID code, i.e. user123 (where 123 is the code of the account that was deleted). The associated issues or actions are not deleted.

As far as the underlying database, after the deletion of a user, records with the user ID as a foreign key will have a value that no longer exists in the users' table. Hence, any tools that operate directly on the database must take this into consideration.

By default administrators are the only users who can delete user accounts. They can delete accounts by clicking Manage, Manage Users, locating the user to be deleted and opening it details page, then clicking on the “Delete User” button which deletes the user.

Deleting a user is NOT a reversible process. You can create a new user account for the same person but it will not have the same ID so prior history will not be visible/associated to the new account. We strongly recommend disabling users rather than deleting them. Only active users are counted toward your user total for pricing purposes. Deleted or disabled users are not.  

