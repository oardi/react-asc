import React, { cloneElement, ReactElement, useEffect, useState } from 'react';
import { ListItemModel } from './list.models';
import { IListItemProps } from './ListItem';

export interface IListProps {
	children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
	isFlush?: boolean;
	isHoverable?: boolean;
}

export const List = (props: IListProps) => {

	const { children, isFlush = false, isHoverable = false } = props;

	const [listItems, setListItems] = useState<Array<ListItemModel>>([]);

	useEffect(() => {
		if (children) {
			if (Array.isArray(children)) {
				setListItems(children.map(child => new ListItemModel(child)));
			} else {
				setListItems([new ListItemModel(children)]);
			}
		}
	}, [children]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list list-group');
		if (isFlush) {
			cssClasses.push(`list-group-flush`);
		}
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<ul className={getCssClasses()}>
			{listItems && listItems.map((listItem, index) => (
				cloneElement(listItem, {
					isHoverable: isHoverable,
					key: listItem.key ? listItem.key : index
				})
			))}
		</ul>
	);
}
