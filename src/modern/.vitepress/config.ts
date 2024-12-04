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
    sidebar: {
      '/': [
        {
          text: "Getting Started",
          collapsed: true,
          items: [
            { text: "Introduction", link: "/introduction" },
          ],
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
      ]
    },
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