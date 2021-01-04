export class SidebarItemModel {
	constructor(
		public id: string,
		public label: string,
		public path: string,
		public icon?: string,
		public isActive?: boolean,
		public items?: Array<SidebarItemModel>) {
	}
}
