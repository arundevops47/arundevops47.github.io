# Setting Up Helpdesk Project, Snippets and Filters

As well as the configuration involved in configuring the MantisHub Helpdesk plugin, there are a few other things you'll want to configure in your supporting systems to help with using Helpdesk for your ticketing needs. 

**Setting up the Helpdesk project**

We recommend you create a new, private project as the repository for all your Helpdesk tickets. You'll need to specifically add your support team (with DEVELOPER access) as well make sure the 'Email' user (with REPORTER access) is added to this project. Then go into your [Helpdesk configuration](/mantishub_helpdesk/config_plugin) and set this as the default project. Your default project should inherit global categories as emailed issues are created in the global '[All Projects] General' category. If this category is not inherited, then you will get message rejections.

**Setting up Snippets plugin**

[Install the Snippets Plugin](/plug_ins/snippets) to allow you to create your re-usable support responses, signatures, notes, etc. Create as many snippets as you need, typically global snippets so the whole team can use them. You should also set the following access levels to restrict any changes to Developer or above:

- Managing Global Snippets - DEVELOPER,
- Use Global Snippets DEVELOPER, and
- Edit My Snippets - DEVELOPER.

**Setting up Chat plugin**

If you wish, you can link to your [Slack](https://blog.mantishub.com/2015/02/23/mantishub-slack-more-productive-team/) chat service by installing the plugin and setting up your webhook URLs. Set your Helpdesk project to your project support channel.

**Setting up project filters**

Make use of your **Filters**. The "My View" page will generally be your go-to when dealing with your Helpdesk tickets. The pre-made filters will show you tickets:

- *Assigned to you* - to display your specific Helpdesk tickets
- *Unassigned* - filter for triaging or picking up unassigned tickets
- *Recently Modified* and,
- *Recently Solved* - for the latest updates on tickets by your team. 

In addition you can always [create, save and share filters](/filters/saving_sharing_filters) for your Helpdesk project to use via the 'View issues' page. Based on the suggested workflow in [Handling Incoming Helpdesk Issues](/mantishub_helpdesk/handling_issues),  Some suggestions include:

- *Waiting on Customer Response* - set your filter to all tickets in the 'feedback' status to show what tickets are waiting on your clients.
- *Waiting on Team Action* - set the filter for all tickets NOT in a 'feedback', 'resolved' or 'closed' status to view what tickets your team still need to action.
- *Waiting on My action* - set the filter for all tickets NOT in a 'feedback', 'resolved' or 'closed' status and assigned to 'Myself' to see what issues you need to action.
