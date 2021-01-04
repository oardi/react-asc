import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Snackbar } from './Snackbar';

export class SnackbarService {
	private container: HTMLElement;

	show(message: string, timeout: number = 3000): Promise<void> {

		this.container = document.createElement('div');
		this.container.classList.add('snackbar-container');
		document.body.appendChild(this.container);

		if (timeout > 0) {
			setTimeout(() => {
				this.hide();
			}, timeout);
		}

		return new Promise((resolve, reject) => {
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
