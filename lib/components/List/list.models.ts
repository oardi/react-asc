import { ReactElement } from 'react';
import { IListItemProps } from './ListItem';

export class ListItemModel {
	constructor(dto: ReactElement<IListItemProps>) {
		return { ...dto }
	}

	key: unknown;
	props: IListItemProps | undefined;
	type: unknown;
}
