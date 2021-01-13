import { IMenuItem } from '../app.interfaces';
import { ISidebarItem } from '../lib';

export class MenuModel implements ISidebarItem {

	constructor(dto: IMenuItem) {
		this.id = dto.id;
		this.label = dto.label ? dto.label : dto.id;
		this.path = dto.path !== undefined ? dto.path : dto.id;
		this.items = dto.items ? dto.items.map(i => new MenuModel(i)) : undefined;
	}

	id: string;
	label: string;
	path: string;
	items: Array<MenuModel>;
}
