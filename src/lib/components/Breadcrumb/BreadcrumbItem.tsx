import React from 'react';
import { ConditionalWrapper } from '../ConditionalWrapper';
import styles from './BreadcrumbItem.module.scss';

export interface IBreadcrumbItemProps extends React.ComponentProps<'li'> {
	isActive?: boolean;
	path?: string;
}

export const BreadcrumbItem = (props: IBreadcrumbItemProps): React.JSX.Element => {
	const { children, className, isActive, onClick } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.breadcrumbItem);
		className && cssClasses.push(className);
		isActive && cssClasses.push('active');
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClick = (event: React.MouseEvent<HTMLLIElement>): void => {
		onClick && onClick(event);
	};

	return (
		<li className={getCssClasses()} onClick={handleClick}>
			<ConditionalWrapper condition={!isActive} wrapper={(label): React.JSX.Element => <a>{label}</a>}>
				{children}
			</ConditionalWrapper>
		</li>
	);
};
