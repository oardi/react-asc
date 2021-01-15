import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { COLOR } from '../component.enums';
import { Snackbar } from './Snackbar';

export interface ISnackbarService {
	show(message: string, options?: ISnackbarOptions): Promise<void>;
}

export interface ISnackbarOptions {
	actionText?: string;
	timeout?: number;
	color?: COLOR;
}

class SnackbarService implements ISnackbarService {
	private container: HTMLElement;
	private handler;

	show(message: string, options?: ISnackbarOptions): Promise<void> {
		const defaultOptions: ISnackbarOptions = { timeout: 3000, actionText: 'ok', color: COLOR.dark };
		const mergedOptions = Object.assign(defaultOptions, options);

		return new Promise((resolve, reject) => {
			if (this.container) {
				this.hide();
			}
			this.container = document.createElement('div');
			this.container.classList.add('snackbar-container');
			document.body.appendChild(this.container);

			if (mergedOptions.timeout > 0) {
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
					message={message}
					color={mergedOptions.color}
					actionText={mergedOptions.actionText}
					onOk={handleOk}
				/>,
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
