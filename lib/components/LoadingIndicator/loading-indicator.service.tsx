import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { LoadingIndicator } from './LoadingIndicator';
import { LoadingIndicatorContainer } from './LoadingIndicatorContainer';

export interface ILoadingIndicatorService {
	show(message: string): void;
}

class LoadingIndicatorService implements ILoadingIndicatorService {
	private container: HTMLDivElement | undefined;
	private handler: NodeJS.Timer | undefined;

	show() {
		if (this.container) {
			this.hide();
		}
		this.container = document.createElement('div');
		this.container.classList.add('snackbar-container');
		document.body.appendChild(this.container);

		render(
			<LoadingIndicatorContainer isFixed={true}>
				<LoadingIndicator />
			</LoadingIndicatorContainer>,
			this.container
		);

	}

	hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
			this.container = undefined;
			this.handler && clearTimeout(this.handler);
		}
	}
}

export const loadingIndicatorService = new LoadingIndicatorService();
