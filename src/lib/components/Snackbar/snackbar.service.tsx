import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { COLOR } from '../component.enums';
import { Snackbar } from './Snackbar';

export interface ISnackbarService {
	show(message: React.ReactChildren | string, options?: ISnackbarOptions): Promise<void>;
}

export interface ISnackbarOptions {
	actionText?: string;
	timeout?: number;
	color?: COLOR;
	target?: HTMLElement;
}

class SnackbarService implements ISnackbarService {
	private container: any;
	private handler: any;

	show(message: React.ReactChildren | string, options?: ISnackbarOptions): Promise<void> {
		const defaultOptions: ISnackbarOptions = { timeout: 3000, actionText: 'ok', color: COLOR.dark, target: document.body };
		const mergedOptions = Object.assign(defaultOptions, options);

		return new Promise((resolve, reject) => {
			if (this.container) {
				this.hide();
			}
			this.container = document.createElement('div');
			this.container.classList.add('snackbar-container');
			(mergedOptions.target as HTMLElement).appendChild(this.container);

			if (mergedOptions.timeout && mergedOptions.timeout > 0) {
				this.handler = setTimeout(() => {
					this.hide();
				}, mergedOptions.timeout);
			}

			const handleOk = () => {
				resolve();
				this.hide();
			}

			render(
				<Snackbar
					color={mergedOptions.color}
					actionText={mergedOptions.actionText}
					onOk={handleOk}
				>
					{message}
				</Snackbar>,
				this.container
			);
		})
	}

	private hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
			this.container = null;
			clearTimeout(this.handler);
		}
	}
}

export const snackbarService = new SnackbarService();
