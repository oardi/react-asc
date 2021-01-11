export interface ISidebarItem {
	id: string;
	path: string;
	label: string;
	icon?: string;
	items?: Array<ISidebarItem>;
}
