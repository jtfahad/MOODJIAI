export interface SidebarItem {
  id: string;
  title: string;
  color: string;
  hasMenu?: boolean;
}

export interface MenuAction {
  icon: string;
  label: string;
  onClick: () => void;
}

export interface PopupPosition {
  top: number;
  left: number;
}