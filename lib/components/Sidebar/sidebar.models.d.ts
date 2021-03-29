export declare class SidebarItemModel {
    id: string;
    label: string;
    path: string;
    icon?: string | undefined;
    isActive?: boolean | undefined;
    items?: SidebarItemModel[] | undefined;
    constructor(id: string, label: string, path: string, icon?: string | undefined, isActive?: boolean | undefined, items?: SidebarItemModel[] | undefined);
    isCollapsed: boolean;
}
