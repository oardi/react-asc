import type { ReactElement } from 'react';
import type { IListItemProps } from './ListItem';

export class ListItemModel {
	constructor(dto: ReactElement<IListItemProps>) {
		Object.assign(this, dto);
	}

	key: unknown;
	props: IListItemProps | undefined;
	type: unknown;
}
