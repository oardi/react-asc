import React from 'react';
import { COLOR } from '../component.enums'

export interface ISnackbarProps {
	message: string;
	color?: COLOR;
	actionText?: string;
	onOk?: () => void;
}

export const Snackbar = (props: ISnackbarProps) => {

	const { message, color = COLOR.dark, actionText = 'ok', onOk } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`snackbar shadow-lg`);
		cssClasses.push(`bg-${color}`);
		cssClasses.push(`text-white`);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClickAction = () => {
		onOk && onOk();
	}

	return (
		<div className={getCssClasses()}>
			<div className="text">
				{message}
			</div>

			<div className="action text-accent" onClick={handleClickAction}>
				<span>{actionText}</span>
			</div>
		</div>
	);
}
