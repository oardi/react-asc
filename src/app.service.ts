import { IMenuItem } from './app.interfaces';
import { FileLoaderService } from './shared';

export class ShowcaseService {
	constructor(private fileLoaderService: FileLoaderService) {
	}

	loadMenu() {
		return this.fileLoaderService.get<Array<IMenuItem>>('./public/menu.json');
	}
}
