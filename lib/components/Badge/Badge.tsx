import React from 'react';
import { useCssClasses } from '../../hooks';
import { COLOR } from '../component.enums';
import styles from './Badge.module.scss';

export interface IBadgeProps {
	color?: COLOR;
	content?: React.ReactNode;
	className?: string;
	children?: React.ReactNode;
}

export const Badge = (props: IBadgeProps): JSX.Element => {
	const { children, content, className, color = COLOR.primary, ...rest } = props;

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

const BadgeContainer = (props: React.ComponentProps<'div'>): JSX.Element => {
	const { children, className, ...rest } = props;

	const [cssClassName] = useCssClasses([styles.badgeContainer, className as string]);

	return (
		<div className={cssClassName} {...rest}>
			{children}
		</div>
	);
};
