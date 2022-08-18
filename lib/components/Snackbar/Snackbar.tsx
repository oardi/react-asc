import React, { ComponentProps } from 'react';
import { COLOR } from '../component.enums';
import styles from './Snackbar.module.scss';

export interface ISnackbarProps extends ComponentProps<'div'> {
	color?: COLOR;
	actionText?: string;
	onOk?: (e: React.MouseEvent) => void;
}

export const Snackbar = (props: ISnackbarProps): JSX.Element => {

	const { children, color = COLOR.dark, actionText = 'ok', onOk, ...rest } = props;

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
			<div className={styles.text}>
				{children}
			</div>

			<div className={styles.action + ' text-accent'} onClick={handleClickAction}>
				<span>{actionText}</span>
			</div>
		</div>
	);
};
