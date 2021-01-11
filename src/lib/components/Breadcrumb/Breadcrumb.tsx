import React from 'react';
import { IBreadcrumbItem } from './breadcrumb.interfaces';

export interface IBreadcrumbProps {
	items: Array<IBreadcrumbItem>;
	className?: string;
	onItemClick?: (item: IBreadcrumbItem) => void;
}

export const Breadcrumb = ({ className, items, onItemClick }: IBreadcrumbProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push("breadcrumb");
		cssClasses.push(className);
		return cssClasses.join(' ');
	};

	const handleClickItem = (item: IBreadcrumbItem) => {
		onItemClick && onItemClick(item);
	}

	return (
		<nav>
			<ol className={getCssClasses()}>
				{items && items.map((item, index) => (
					<li key={index} className={"breadcrumb-item" + (item.isActive ? ' active' : '')} onClick={() => handleClickItem(item)}>
						{item.isActive ?
							item.label :
							<a>{item.label}</a>
						}
					</li>
				))}

				{/* <li className="breadcrumb-item active">
					Library
					</li> */}
			</ol>
		</nav>
	);
}
