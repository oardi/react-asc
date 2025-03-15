import type { ComponentProps } from 'react';
import React from 'react';
import { Color } from '../../enums';
import styles from './Snackbar.module.scss';

export interface ISnackbarProps extends ComponentProps<'div'> {
	color?: Color;
	actionText?: string;
	onOk?: (e: React.MouseEvent) => void;
}

export const Snackbar = (props: ISnackbarProps): React.JSX.Element => {
	const { children, color = Color.dark, actionText = 'ok', onOk, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.snackbar);
		cssClasses.push(`shadow-lg`);
		cssClasses.push(styles[color]);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickAction = (e: React.MouseEvent): void => {
		onOk && onOk(e);
	};

	return (
		<div className={getCssClasses()} {...rest}>
			<div className={styles.text}>{children}</div>

			<div className={styles.action + ' text-accent'} onClick={handleClickAction}>
				<span>{actionText}</span>
			</div>
		</div>
	);
};
