export class SidebarItemModel {
	constructor(
		public id: string,
		public label: string,
		public path: string,
		public icon?: string,
		public isActive?: boolean,
		public items?: SidebarItemModel[],
		public isCollapsible: boolean = false,
		public isCollapsed: boolean = false,
		) {
	}
}
