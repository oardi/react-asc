import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Snackbar } from './Snackbar';

export interface ISnackbarService {
	show(message: string, timeout?: number): Promise<void>;
}

class SnackbarService implements ISnackbarService {
	private container: HTMLElement;

	show(message: string, timeout: number = 3000): Promise<void> {

		return new Promise((resolve, reject) => {
			if (this.container) {
				this.hide();
			}
			this.container = document.createElement('div');
			this.container.classList.add('snackbar-container');
			document.body.appendChild(this.container);

			if (timeout > 0) {
				setTimeout(() => {
					this.hide();
				}, timeout);
			}

			const handleOk = () => {
				resolve();
				this.hide();
			}

			render(
				<Snackbar
					message={message}
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
		}
	}
}

export const snackbarService = new SnackbarService();
