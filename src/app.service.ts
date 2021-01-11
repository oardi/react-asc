import { ISidebarItem } from './lib';
import { FileLoaderService } from './shared';

export class ShowcaseService {
	constructor(private fileLoaderService: FileLoaderService) {
	}

	loadMenu() {
		return this.fileLoaderService.get<Array<ISidebarItem>>('./public/menu.json');
	}
}
