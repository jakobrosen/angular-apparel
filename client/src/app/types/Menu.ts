export interface MenuItem {
  name: string;
  label?: string;
  params?: Record<string, string>;
}

export interface MenuColumnDef {
  heading: string;
  params: Record<string, string>;
  itemParam?: 'category' | 'brand';
  items: MenuItem[];
}

export interface MenuSection {
  heading: string;
  columns: MenuColumnDef[];
}
