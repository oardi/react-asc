import { ReactElement, ReactNode } from 'react';
import { ITabProps } from './Tab';

export class TabNavModel {
	constructor(dto: ReactElement<ITabProps>) {
		this.eventKey = dto.props.value;
		this.title = dto.props.label;
		this.disabled = dto.props.disabled;
	}

	eventKey: string;
	title: ReactNode;
	disabled?: boolean;
}

export class TabModel {
	constructor(dto: ReactElement<ITabProps>) {
		return {...dto}
	}

	key: any;
	props: ITabProps | undefined;
	type: any;
}
