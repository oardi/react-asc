import React, { useEffect, useState } from 'react';
import { Color, VARIANT } from '../../enums';
import { Icon } from '../Icon';
import { LoadingIndicator, LoadingIndicatorContainer } from '../LoadingIndicator';
import styles from './Button.module.scss';
import type { IButtonContext } from './ButtonContext';
import { useButtonContext } from './ButtonContext';

export interface IButtonProps extends React.ComponentProps<'button'> {
	color?: Color;
	isActive?: boolean;
	isRounded?: boolean;
	variant?: VARIANT;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	shadow?: boolean;
	block?: boolean;
	loading?: boolean;
}

export const Button: React.FunctionComponent<IButtonProps> = props => {
	const {
		children,
		variant = VARIANT.contained,
		color = Color.primary,
		isRounded,
		isActive,
		className,
		startIcon,
		endIcon,
		shadow = true,
		block,
		loading,
		disabled,
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

	const buttonContext: IButtonContext = useButtonContext();

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.button);

		const buttonColor: Color = buttonContext.color || color;

		if (variant !== 'outline' && variant !== 'text') {
			cssClasses.push(styles.btnContained);
			cssClasses.push(styles[buttonColor]);
		}
		if (variant === 'outline') {
			cssClasses.push(styles.btnOutline);
			cssClasses.push(styles[buttonColor]);
		}
		if (variant === 'text') {
			cssClasses.push(styles.btnText);
			cssClasses.push(styles[buttonColor]);
		}
		if (isRounded && variant !== 'text') {
			cssClasses.push(`rounded-pill`);
		}
		if (isActive) {
			cssClasses.push('active');
		}
		shadow && cssClasses.push(styles.shadow);
		block && cssClasses.push(styles.block);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<button type="button" className={getCssClasses()} disabled={isDisabled} {...rest}>
			<span className="d-flex justify-content-center align-items-center">
				{isLoading && (
					<div className="mr-1">
						<LoadingIndicatorContainer>
							<LoadingIndicator />
						</LoadingIndicatorContainer>
					</div>
				)}
				{startIcon && <Icon className={styles.startIcon}>{startIcon}</Icon>}
				{children}
				{endIcon && <Icon className={styles.endIcon}>{endIcon}</Icon>}
			</span>
		</button>
	);
};
