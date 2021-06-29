export declare class SidebarItemModel {
    id: string;
    label: string;
    path: string;
    icon?: string | undefined;
    isActive?: boolean | undefined;
    items?: SidebarItemModel[] | undefined;
    isCollapsible: boolean;
    isCollapsed: boolean;
    constructor(id: string, label: string, path: string, icon?: string | undefined, isActive?: boolean | undefined, items?: SidebarItemModel[] | undefined, isCollapsible?: boolean, isCollapsed?: boolean);
}
