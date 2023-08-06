declare module SidebarMenu {
  type TMenuItemLabel =
    | 'Dashboard'
    | 'Tests'
    | 'Team'
    | 'Manage Team'
    | 'Contacts Information'
    | 'Invoices Balances'
    | 'Profile Form'
    | 'Calendar'
    | 'FAQ Page'
    | 'Bar Chart'
    | 'Pie Chart'
    | 'Line Chart'
    | 'Geography Chart';

  interface IMenuItemHeading {
    type: 'heading';
    title: string;
  }

  interface IMenuItemLink {
    type: 'item';
    title: MenuItemLabel;
    to: string;
    icon: React.ReactNode;
  }

  type TMenuItem = IMenuItemHeading | IMenuItemLink;
}
