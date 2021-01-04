import React from 'react';
import { COLOR } from '../component.enums'

export interface ISnackbarProps {
	message: string;
	color?: COLOR;
	actionText?: string;
	onOk?: () => void;
}

export const Snackbar = ({ message, color = COLOR.accent, actionText = 'ok', onOk }: ISnackbarProps) => {

	const getCssClasses = () => {

		const cssClasses: Array<string> = [];
		cssClasses.push(`snackbar shadow-lg`);
		cssClasses.push(`bg-${color}`);
		cssClasses.push(`text-white`);
		return cssClasses.join(' ');
	}

	const handleClickAction = () => {
		onOk && onOk();
	}

	return (
		<div className={getCssClasses()}>
			<div className="text">
				{message}
			</div>

			<div className="action" onClick={handleClickAction}>
				<span>{actionText}</span>
			</div>
		</div>
	);
}
