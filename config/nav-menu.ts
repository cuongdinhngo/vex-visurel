export interface NavMenuItem {
  label: string;
  page?: string;
  icon?: string;
  to?: { name: string; query?: Record<string, any> };
  subMenu?: NavMenuItem[];
}

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
        page: "help-center",
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
        page: "calendar",
        count: 5,
        color: "primary",
        to: { name: "calendar" },
      },
      {
        label: "Chat",
        icon: "mdi-chat",
        page: "chat",
        to: { name: "chat" },
      },
      {
        label: "Mailbox",
        icon: "mdi-mail",
        page: "mail",
        to: { name: "mail-category", params: { category: 'inbox' } },
      },
      {
        label: "Social",
        page: "social",
        icon: "mdi-account-group",
        subMenu: [
          {
            label: "Profile",
            page: "social",
            to: { name: "social" },
          },
          {
            label: "Timeline",
            page: "social-timeline",
            to: { name: "social-timeline" },
          }
        ]
      },
      {
        label: "Contacts",
        page: "contacts",
        icon: "mdi-account-multiple",
        subMenu: [
          {
            label: "List - Grid",
            page: "contacts-grid",
            to: { name: "contacts-grid" },
          },
          {
            label: "List - Table",
            page: "contacts-table",
            to: { name: "contacts-table" },
          }
        ]
      },
      {
        label: "Scrumboard",
        page: "scrumboard",
        icon: "mdi-developer-board",
        to: { name: "scrumboard" },
      },
    ]
  }
];