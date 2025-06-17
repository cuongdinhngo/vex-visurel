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
            to: { name: "index" },
          },
          {
            label: "Pricing & Plans",
            to: { name: "index" },
          },
          {
            label: "FAQ",
            to: { name: "index" },
          },
          {
            label: "Guides",
            to: { name: "index" },
          },
        ]
      },
      {
        label: "Calendar",
        icon: "mdi-calendar",
        to: { name: "index" },
      },
      {
        label: "Chat",
        icon: "mdi-chat",
        to: { name: "index" },
      },
      {
        label: "Mailbox",
        icon: "mdi-mail",
        to: { name: "index" },
      },
      {
        label: "Social",
        icon: "mdi-account-group",
        subMenu: [
          {
            label: "Profile",
            to: { name: "index" },
          },
          {
            label: "Timeline",
            to: { name: "index" },
          }
        ]
      },
      {
        label: "Contacts",
        icon: "mdi-account-multiple",
        subMenu: [
          {
            label: "List - Grid",
            to: { name: "index" },
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