import { defineConfig } from 'vitepress'
import path from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MantisHub",
  description: "Hassle free bug & issue tracking",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  base: "/",
  cleanUrls: true,
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/introduction" },
      {
        component: 'VersionSwitcher',
      },
    ],
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    footer: {
      message:
        "MantisHub might just be the ticket tracking tool you have been waiting for. It's lovingly handcrafted in Seattle",
      copyright:
        "MantisHub LLC. | Copyright 2015 - 2023 © All Rights Reserved.",
    },    
    sidebar: [
      {
        text: "Getting Started",
        collapsed: true,
        items: [
          {
            text: "Introduction",
            link: "/introduction"
          }
        ]
      },
      {
        text: "Issue Management",
        collapsed: true,
        items: [
          {
            text: "User and Issue ID Auto-Completion",
            link: "/issue_management/auto_complete",
          },
          {
            text: "Issue Actions",
            link: "/issue_management/issue_actions",
          },
          {
            text: "Email Tutorial & User Guide",
            link: "/issue_management/email_tutorial",
          },
          {
            text: "Verbose & Non-Verbose Email Notifications",
            link: "/issue_management/verbose_email",
          },
          {
            text: "Assigning Issues",
            link: "/issue_management/assigning_issues",
          },
          {
            text: "Markdown Support",
            link: "/issue_management/markdown_support",
          },
          {
            text: "Multiple Issue Updates with Group Actions",
            link: "/issue_management/update_multiple_issues",
          },
          {
            text: "Recovering from Filter Error 401",
            link: "/issue_management/error_401",
          },
          {
            text: "@ Mentions For User Notifications",
            link: "/issue_management/mention_notifications",
          },
          {
            text: "Issue Reminders",
            link: "/issue_management/issue_reminders",
          },
          {
            text: "Linking Issues Via Issue Relationships",
            link: "/issue_management/linking_issues",
          },
          {
            text: "Using Time Tracking",
            link: "/issue_management/time_tracking",
          },
          {
            text: "Troubleshooting Email Notifications",
            link: "/issue_management/troubleshoot_emailnotif",
          },
          {
            text: "Configuring Email Notifications",
            link: "/issue_management/config_email_notifs",
          },
          {
            text: "Printing Reports",
            link: "/issue_management/print_reports",
          },
          {
            text: "Export Issues to Excel / CSV",
            link: "/issue_management/export_excel_csv",
          },
          {
            text: "Moving Issues Between Projects",
            link: "/issue_management/moving_issues",
          },
          {
            text: "Using Tags",
            link: "/issue_management/using_tags",
          },
          {
            text: "Status and Resolution Valid Combinations",
            link: "/issue_management/combs_status_resol",
          },
          {
            text: "Marking Issues and Issue Notes as Private by Default",
            link: "/issue_management/privating_issues",
          },
          {
            text: "Setting Up Time Tracking",
            link: "/issue_management/setup_time_tracking",
          },
          {
            text: "Public vs Private Issues",
            link: "/issue_management/public_vs_private_issues",
          },
          {
            text: "Attaching Files",
            link: "/issue_management/attatching_files",
          },
          {
            text: "Reporting Issue",
            link: "/issue_management/report_issue",
          },
          {
            text: "Issue Lifecycle",
            link: "/issue_management/issue_lifecycle",
          },
        ],
      },
      {
        text: "Filters",
        collapsed: true,
        items: [
          {
            text: "Filters Through API",
            link: "/filters/filters_api",
          },
          {
            text: "Using Filters",
            link: "/filters/using_filters",
          },
          {
            text: "Filtering on Semantic Values",
            link: "/filters/filter_semantic_values",
          },
          {
            text: "All vs Current Project",
            link: "/filters/all_vs_current_project",
          },
          {
            text: "Savings and Sharing Filters",
            link: "/filters/saving_sharing_filters",
          },
        ],
      },
      {
        text: "System management",
        collapsed: true,
        items: [
          {
            text: "Event Log for Email Notifications",
            link: "/system_management/event_log_email_notifs",
          },
          {
            text: "Authentication Timeout",
            link: "/system_management/authent_timeout",
          },
        ],
      },
      {
        text: "User Customizations",
        collapsed: true,
        items: [
          {
            text: "Customizing Date Format",
            link: "/user_customizations/custom_date_format",
          },
          {
            text: "MantisHub Web App Shortcuts",
            link: "/user_customizations/mh_web_shortcuts",
          },
          {
            text: "Setup Your Avatar, Profile Image",
            link: "/user_customizations/setup_avatar",
          },
          {
            text: "Changing Language",
            link: "/user_customizations/change_language",
          },
        ],
      },
      {
        text: "API",
        collapsed: true,
        items: [
          {
            text: "MantisHub REST APIs",
            link: "/api/mh_rest_api",
          },
          {
            text: "API Token Connection to MantisHub",
            link: "/api/connecting_mh_api_tokens",
          },
          {
            text: "Using API Tokens to Access MantisHub",
            link: "/api/tokens_access_mh",
          },
          {
            text: "MantisHub SOAP API",
            link: "/api/mh_soap_apis",
          },
        ],
      },
      {
        text: "Project Management",
        collapsed: true,
        items: [
          {
            text: "Reporting and Statistics: Summary & Graphs",
            link: "/project_management/report_stats_plugin",
          },
          {
            text: "Project Selector",
            link: "/project_management/project_selector",
          },
          {
            text: "Versions in MantisHub",
            link: "/project_management/versions_mh",
          },
          {
            text: "Managing Categories",
            link: "/project_management/manage_categories",
          },
          {
            text: "Changing the Default Category",
            link: "/project_management/change_default_catgs",
          },
          {
            text: "Deleting a Category",
            link: "/project_management/delete_catgs",
          },
          {
            text: "Making Projects Private by Default",
            link: "/project_management/projects_private",
          },
          {
            text: "Auto-Assign Issues Based on Category",
            link: "/project_management/auto_assign_issues",
          },
          {
            text: "Creating Projects",
            link: "/project_management/create_projects",
          },
          {
            text: "Archiving Projects",
            link: "/project_management/archiving_projects",
          },
          {
            text: "Project Roadmap",
            link: "/project_management/project_roadmap",
          },
          {
            text: "Project Changelog",
            link: "/project_management/project_changelog",
          },
          {
            text: "Project Configuration",
            link: "/project_management/project_config",
          },
        ],
      },
      {
        text: "User Management",
        collapsed: true,
        items: [
          {
            text: "Restricting User Access to Issues",
            link: "/user_management/restricting_issue_access",
          },
          {
            text: "Exporting Users Information",
            link: "/user_management/export_user_info",
          },
          {
            text: "Impersonating Users",
            link: "/user_management/imperson_users",
          },
          {
            text: "Contacting MantisHub Support",
            link: "/user_management/contact_support",
          },
          {
            text: "Changing MantisHub URL/Domain Name",
            link: "/user_management/change_domain",
          },
          {
            text: "User Blocked to Avoid Spam (Rate Limiting)",
            link: "/user_management/user_blocked",
          },
          {
            text: "Troubleshooting Username/Real Name Uniqueness",
            link: "/user_management/username_unique",
          },
          {
            text: "Forgot/Reset Password",
            link: "/user_management/reset_password",
          },
          {
            text: "Logging Into MantisHub and Billing Interface",
            link: "/user_management/login_billing",
          },
          {
            text: "Creating User Accounts",
            link: "/user_management/create_user_accounts",
          },
          {
            text: "Disabling User Accounts",
            link: "/user_management/disable_accounts",
          },
          {
            text: "Changing Password",
            link: "/user_management/change_password",
          },
          {
            text: "Deleting User Accounts",
            link: "/user_management/delete_accounts",
          },
          {
            text: "Pruning User Accounts",
            link: "/user_management/prune_accounts",
          },
          {
            text: "Authorization and Access Levels",
            link: "/user_management/auth_access_levels",
          },
        ],
      },
      {
        text: "MantisHub Helpdesk: Reporting Via Email",
        collapsed: true,
        items: [
          {
            text: "Troubleshooting Helpdesk Problems",
            link: "/mantishub_helpdesk/troubleshoot_helpdesk",
          },
          {
            text: "Handling Incoming Helpdesk Issues",
            link: "/mantishub_helpdesk/handling_issues",
          },
          {
            text: "Helpdesk Project Setup: Snippets and Filters",
            link: "/mantishub_helpdesk/setup_projects",
          },
          {
            text: "Configuring The Helpdesk Plugin",
            link: "/mantishub_helpdesk/config_plugin",
          },
          {
            text: "Reporting Issues Via Email - Helpdesk",
            link: "/mantishub_helpdesk/report_email",
          },
          {
            text: "Commenting on Issues Through Notifications",
            link: "/mantishub_helpdesk/comment_issues",
          },
          {
            text: "Email Reporting and Spam",
            link: "/mantishub_helpdesk/email_reporting",
          },
        ],
      },
      {
        text: "MantisHub Pages: Integrated Wiki",
        collapsed: true,
        items: [
          {
            text: "Pages: Getting Started",
            link: "/pages/pages",
          }
        ],
      },
      {
        text: "MantisHub Mobile Access",
        collapsed: true,
        items: [
          {
            text: "Accessing MantisHub From Your Mobile",
            link: "/mobile_access/accessing_mh",
          },
          {
            text: "Mobile Access on iPhone",
            link: "/mobile_access/iphone",
          },
          {
            text: "Mobile Access on Android",
            link: "/mobile_access/android",
          },
        ],
      },
      {
        text: "Plug-Ins & Integrations",
        collapsed: true,
        items: [
          {
            text: "Pages Plugin: Wiki and Documentation",
            link: "/plug_ins/pages",
          },
          {
            text: "Linked Custom Fields Plugin",
            link: "/plug_ins/linked_custom",
          },
          {
            text: "Password Strength Plugin",
            link: "/plug_ins/password_strength",
          },
          {
            text: "Kanban Plugin: Agile Workflow Management",
            link: "/plug_ins/kanban",
          },
          {
            text: "Recurring Tasks Plugin",
            link: "/plug_ins/recurring_tasks",
          },
          {
            text: "Zapier Integration",
            link: "/plug_ins/zapier",
          },
          {
            text: "Microsoft Teams Chat Integration",
            link: "/plug_ins/msft_teams",
          },
          {
            text: "TestRail Integration: Test Management",
            link: "/plug_ins/testrail",
          },
          {
            text: "Localization of MantisHub Plugins",
            link: "/plug_ins/localization",
          },
          {
            text: "Add In-App Feedback: Bugsee Integration",
            link: "/plug_ins/bugsee.md",
          },
          {
            text: "Configuring AuthHub for Single Sign-on (SSO) Plugin",
            link: "/plug_ins/config_authhub.md",
          },
          {
            text: "Google & G-Suite Authentication (SSO)",
            link: "plug_ins/google_auth.md",
          },
          {
            text: "Single Sign-On (SSO) with GitHub",
            link: "/plug_ins/github.md",
          },
          {
            text: "Using Azure AD (Office 365) Authentication for SSO",
            link: "/plug_ins/azuread.md",
          },
          {
            text: "Setting Up Source Control Integration",
            link: "/plug_ins/source_control.md",
          },
          {
            text: "Announcements Plugin",
            link: "/plug_ins/announce.md",
          },
          {
            text: "Slack Integration for Chat",
            link: "/plug_ins/slack.md",
          },
          {
            text: "Tracking Upstream Issues via Live Links",
            link: "/plug_ins/upstream.md",
          },
          {
            text: " Single Sign-On (SSO) for Bitbucket",
            link: "/plug_ins/bitbucket.md",
          },
          {
            text: "JetBrains IDEs Integration",
            link: "/plug_ins/jetbrains.md",
          },
          {
            text: "MantisHub and TestLodge Integration",
            link: "/plug_ins/testlodge.md",
          },
          {
            text: "Grasshopper Integration (Voicemails)",
            link: "/plug_ins/grasshopper.md",
          },
          {
            text: "Snippets Plugin",
            link: "/plug_ins/snippets.md",
          },
          {
            text: "Trim Attachment Plugin",
            link: "/plug_ins/trim.md",
          },
          {
            text: "Toggl Integration for Time Tracking",
            link: "/plug_ins/toggl.md",
          },
        ],
      },
      {
        text: "Migrating to MantisHub",
        collapsed: true,
        items: [
          {
            text: "MS SQL and PostgreSQL Conversion to MySQL",
            link: "/migrating_to_mh/ms_sql.md",
          },
          {
            text: "Importing Users from CSV",
            link: "/migrating_to_mh/import_users.md",
          },
          {
            text: "Estimating Disk Space Requirements",
            link: "/migrating_to_mh/est_disk.md",
          },
          {
            text: "Preparing Data For Migration",
            link: "/migrating_to_mh/prep_data.md",
          },
          {
            text: "Migrating Your Data to MantisHub",
            link: "/migrating_to_mh/migrate_data.md",
          },
        ],
      },
      {
        text: "Customizations",
        collapsed: true,
        items: [
          {
            text: "Changing Font",
            link: "/customizations/change_font.md",
          },
          {
            text: "Setting Default Values for Issue Details",
            link: "/customizations/def_values.md",
          },
          {
            text: "Workflow Transitions",
            link: "/customizations/wf_trans.md",
          },
          {
            text: "Adding Custom Main Menu Options",
            link: "/customizations/custom_menu.md",
          },
          {
            text: "Workflow Thresholds",
            link: "/customizations/wf_thres.md",
          },
          {
            text: "Status Codes & Colors",
            link: "/customizations/stat_colors.md",
          },
          {
            text: "Changing Timezone",
            link: "/customizations/timezone.md",
          },
          {
            text: "Setting up Anonymous Access",
            link: "/customizations/anon_access.md",
          },
          {
            text: "Customizing Issue Statuses",
            link: "/customizations/issue_stat.md",
          },
          {
            text: "Personalizing MantisHub With Company Name and Logo",
            link: "/customizations/company_logo.md",
          },
          {
            text: "Adding Custom Fields",
            link: "/customizations/custom_fields.md",
          },
          {
            text: "Installing Plugins",
            link: "/customizations/plugins.md",
          },
          {
            text: "Enabling Use of Real Names",
            link: "/customizations/realnames.md",
          },
          {
            text: "Enabling Email Notifications For Own Actions",
            link: "/customizations/email_own.md",
          },
          {
            text: "Enabling Managers to Create Projects",
            link: "/customizations/manager_projects.md",
          },
          {
            text: "Allowing Users to Signup For Access to MantisHub",
            link: "/customizations/allow_signup.md",
          },
          {
            text: "Managing Column Views for View/Print/Export Issues",
            link: "/customizations/column_views.md",
          },
          {
            text: "Customizing Field Values",
            link: "/customizations/c_field_values.md",
          },
          {
            text: "Enabling and Configuring 'Due Date' Tracking",
            link: "/customizations/due_date_track.md",
          },
          {
            text: "Access Levels",
            link: "/customizations/access_levels.md",
          },
        ],
      },
      {
        text: "Plans and Billing",
        collapsed: true,
        items: [
          {
            text: "Invoice Billing Service",
            link: "/plans_billing/invoice.md",
          },
          {
            text: "How to Restore a Suspended or Expired Service",
            link: "/plans_billing/restore.md",
          },
          {
            text: "Storage and User Pack Charges",
            link: "/plans_billing/storage.md",
          },
          {
            text: "Transferring Account Owner",
            link: "/plans_billing/transfer.md",
          },
          {
            text: "Plan Information",
            link: "/plans_billing/plan.md",
          },
          {
            text: "Privacy Policy and Terms of Service",
            link: "/plans_billing/privacy.md",
          },
          {
            text: "Our Company Does Not Have a Credit Card",
            link: "/plans_billing/creditcard.md",
          },
          {
            text: "Downloading Invoices and Statements",
            link: "/plans_billing/download.md",
          },
          {
            text: "Updating Customer Contact Details",
            link: "/plans_billing/updating.md",
          },
          {
            text: "Adding or Updating Payment Methods",
            link: "/plans_billing/adding.md",
          },
          {
            text: "Monthly vs. Annual Plans",
            link: "/plans_billing/monthly_annual.md",
          },
          {
            text: "Switching Plans",
            link: "/plans_billing/switching.md",
          },
          {
            text: "Security of Payment Method",
            link: "/plans_billing/security.md",
          },
          {
            text: "Removing Payment Method",
            link: "/plans_billing/removing.md",
          },
          {
            text: "Closing/Cancelling Your MantisHub Account",
            link: "/plans_billing/closing.md",
          },
        ],
      },
      {
        text: "Importing and Exporting Data",
        collapsed: true,
        items: [
          {
            text: "Backing up & Downloading Your Data",
            link: "/import_export/backingup.md",
          },
          {
            text: "Importing Issues From CSV Files",
            link: "/import_export/importing.md",
          },
        ],
      },
      {
        text: "General",
        collapsed: true,
        items: [],
      },
      {
        text: "Security",
        collapsed: true,
        items: [
          {
            text: "How to Exercise your GDPR Rights",
            link: "/security/exercise.md",
          },
          {
            text: "MantisHub Security",
            link: "/security/mantishub.md",
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/mantishub/" }],
  },
  vite: {
    publicDir: path.resolve(__dirname, '../../public'),
    resolve: {
      alias: {
        '@theme': path.resolve(__dirname, '../../.vitepress/theme')
      }
    }
  },
})