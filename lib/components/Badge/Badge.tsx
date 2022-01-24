import React from 'react';
import { COLOR } from "../component.enums";
import styles from './Badge.module.scss';

export interface IBadgeProps extends React.ComponentProps<"div"> {
	color?: COLOR;
	content?: React.ReactNode;
}

export const Badge = (props: IBadgeProps) => {

	const { children, content, className, color = COLOR.primary, ...rest } = props;

	const getCssClassesBadgeContainer = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.badgeContainer);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const getCssClassesBadge = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.badge);
		cssClasses.push(styles[color]);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClassesBadgeContainer()} {...rest}>
			{children}

			<span className={getCssClassesBadge()}>
				{content}
			</span>
		</div>
	);
}
