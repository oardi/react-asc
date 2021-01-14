import React, { cloneElement, ReactElement, useEffect, useState } from 'react';
import { ListItemModel } from './list.models';
import { IListItemProps } from './ListItem';

interface IListProps {
	children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
	isFlush?: boolean;
	isHoverable?: boolean;
}

export const List = ({ children, isFlush = false, isHoverable = true }: IListProps) => {

	const [listItems, setListItems] = useState<Array<ListItemModel>>(null);

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
		return cssClasses.join(' ');
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
