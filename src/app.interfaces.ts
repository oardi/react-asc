export interface IAppInfo {
	name?: string;
	version?: string;
}

export interface IMenuItem {
	id: string;
	label?: string;
	path?: string;
	items?: IMenuItem[];
	isCollapsible?: boolean;
	isCollapsed?: boolean;
	element?: React.ReactNode;
}
