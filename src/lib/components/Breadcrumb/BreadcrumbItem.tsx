import React, { ReactNode } from 'react';
import { ConditionalWrapper } from '..';
import styles from './BreadcrumbItem.module.scss';

export interface IBreadcrumbItemProps {
	className?: string;
	isActive?: boolean;
	path?: string;
	children?: ReactNode;
	onClick?: (event: React.MouseEvent) => void;
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

	const handleClick = (event: React.MouseEvent) => {
		onClick && onClick(event);
	}

	return (
		<li className={getCssClasses()} onClick={handleClick}>
			<ConditionalWrapper
				condition={!isActive}
				// eslint-disable-next-line jsx-a11y/anchor-is-valid
				wrapper={label => <a>{label}</a>}>
				{children}
			</ConditionalWrapper>
		</li>
	);
}
