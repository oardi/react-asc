import React, { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { LoadingIndicator, LoadingIndicatorContainer } from '../LoadingIndicator';
import { COLOR, SIZE, VARIANT } from '../component.enums';
import styles from './IconButton.module.scss';

export interface IIconButtonProps extends React.ComponentProps<'button'> {
	icon?: React.ReactNode;
	color?: COLOR;
	size?: SIZE;
	isActive?: boolean;
	variant?: VARIANT;
	shadow?: boolean;
	loading?: boolean;
}

export const IconButton = (props: IIconButtonProps): JSX.Element => {
	const {
		children,
		icon,
		variant = VARIANT.text,
		color = COLOR.dark,
		size = SIZE.md,
		isActive,
		disabled,
		loading,
		className,
		shadow,
		...rest
	} = props;

	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (loading) {
			setIsLoading(true);
			setIsDisabled(true);
		} else {
			setIsLoading(false);
			if (disabled !== true) {
				setIsDisabled(false);
			}
		}
	}, [loading]);

	useEffect(() => {
		if (disabled !== undefined) {
			setIsDisabled(disabled);
		}
	}, [disabled]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles[color]);
		cssClasses.push(styles[variant]);
		cssClasses.push(styles[size]);
		cssClasses.push(styles.iconButton);

		isActive && cssClasses.push(styles.active);
		disabled && cssClasses.push(styles.disabled);
		shadow && cssClasses.push(styles.shadow);

		className && cssClasses.push(className);

		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button type="button" className={getCssClasses()} disabled={isDisabled} {...rest}>
			{isLoading && (
				<LoadingIndicatorContainer>
					<LoadingIndicator />
				</LoadingIndicatorContainer>
			)}

			{!isLoading && (
				<>
					{icon && <Icon>{icon}</Icon>}
					{children}
				</>
			)}
		</button>
	);
};
