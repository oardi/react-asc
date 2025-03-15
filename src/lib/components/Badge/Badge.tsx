import React from 'react';
import { Color } from '../../enums';
import { useCssClasses } from '../../hooks';
import styles from './Badge.module.scss';

export interface IBadgeProps {
	color?: Color;
	content?: React.ReactNode;
	className?: string;
	children?: React.ReactNode;
}

export const Badge = (props: IBadgeProps): React.JSX.Element => {
	const { children, content, className, color = Color.secondary, ...rest } = props;

	const [cssClassName] = useCssClasses([styles.badge, styles[color], className as string]);

	return (
		<BadgeContainer>
			{children}
			<span className={cssClassName} {...rest}>
				{content}
			</span>
		</BadgeContainer>
	);
};

const BadgeContainer = (props: React.ComponentProps<'div'>): React.JSX.Element => {
	const { children, className, ...rest } = props;

	const [cssClassName] = useCssClasses([styles.badgeContainer, className as string]);

	return (
		<div className={cssClassName} {...rest}>
			{children}
		</div>
	);
};
