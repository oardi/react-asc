import { menuItems } from './AppMenu';

class ShowcaseService {
	loadMenu() {
		return menuItems;
	}
}

export const showcaseService = new ShowcaseService();
