export const NAV_MENU = [
  {
    group: "Dashboards",
    menu: [
      {
        label: "Analytics",
        page: "index",
        icon: "mdi-chart-line",
        to: { name: "index" },
      },
    ],
  },
  {
    group: "Apps",
    menu: [
      {
        label: "All-In-One Table",
        page: "aio-table",
        icon: "mdi-table-large",
        to: { name: "aio-table" },
      },
      {
        label: "Help Center",
        icon: "mdi-help-circle",
        subMenu: [
          {
            label: "Getting Started",
            page: "getting-started",
            to: { name: "help-center", query: { tab: 'getting-started'} },
          },
          {
            label: "Pricing & Plans",
            page: "pricing",
            to: { name: "help-center", query: { tab: 'pricing'} },
          },
          {
            label: "FAQ",
            page: "faq",
            to: { name: "help-center", query: { tab: 'faq'} },
          },
          {
            label: "Guides",
            page: "guides",
            to: { name: "help-center", query: { tab: 'guides'} },
          },
        ]
      },
      {
        label: "Calendar",
        icon: "mdi-calendar",
        to: { name: "calendar" },
      },
      {
        label: "Chat",
        icon: "mdi-chat",
        to: { name: "chat" },
      },
      {
        label: "Mailbox",
        icon: "mdi-mail",
        to: { name: "mail" },
      },
      {
        label: "Social",
        icon: "mdi-account-group",
        subMenu: [
          {
            label: "Profile",
            to: { name: "social" },
          },
          {
            label: "Timeline",
            to: { name: "social-timeline" },
          }
        ]
      },
      {
        label: "Contacts",
        icon: "mdi-account-multiple",
        subMenu: [
          {
            label: "List - Grid",
            to: { name: "contacts-grid" },
          },
          {
            label: "List - Table",
            to: { name: "index" },
          }
        ]
      },
      {
        label: "Scrumboard",
        icon: "mdi-developer-board",
        to: { name: "index" },
      },
    ]
  }
];