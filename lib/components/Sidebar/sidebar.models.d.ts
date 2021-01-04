export declare class SidebarItemModel {
    id: string;
    label: string;
    path: string;
    icon?: string;
    isActive?: boolean;
    items?: Array<SidebarItemModel>;
    constructor(id: string, label: string, path: string, icon?: string, isActive?: boolean, items?: Array<SidebarItemModel>);
}
