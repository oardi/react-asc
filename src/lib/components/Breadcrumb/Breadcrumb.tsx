import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { IBreadcrumbItem } from './breadcrumb.interfaces';

export interface IBreadcrumbProps {
	items: Array<IBreadcrumbItem>;
	className?: string;
	onItemClick?: (item: IBreadcrumbItem) => void;
}

export const Breadcrumb = (props: IBreadcrumbProps) => {

	const { className = '', items, onItemClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push("breadcrumb");
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickItem = (item: IBreadcrumbItem) => {
		!item.isActive && onItemClick && onItemClick(item);
	}

	return (
		<>
			{items && items.length > 0 &&
				<nav>
					<ol className={getCssClasses()}>
						{items.map((item, index) => (
							<li key={index} className={"breadcrumb-item" + (item.isActive ? ' active' : '')} onClick={() => handleClickItem(item)}>
								<ConditionalWrapper
									condition={!item.isActive}
									wrapper={label => <a>{label}</a>}>
									{item.label}
								</ConditionalWrapper>
							</li>
						))}
					</ol>
				</nav>
			}
		</>
	);
}
