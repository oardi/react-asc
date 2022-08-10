import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './BreadcrumbItem.module.scss';

export interface IBreadcrumbItemProps extends React.ComponentProps<'li'> {
	isActive?: boolean;
	path?: string;
}

export const BreadcrumbItem = (props: IBreadcrumbItemProps) => {

	const { children, className, isActive, onClick } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.breadcrumbItem);
		className && cssClasses.push(className);
		isActive && cssClasses.push('active');
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
		onClick && onClick(event);
	};

	return (
		<li className={getCssClasses()} onClick={handleClick}>
			<ConditionalWrapper
				condition={!isActive}
				wrapper={label => <a>{label}</a>}>
				{children}
			</ConditionalWrapper>
		</li>
	);
};
