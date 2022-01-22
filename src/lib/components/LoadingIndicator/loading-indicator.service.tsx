import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { LoadingIndicator } from './LoadingIndicator';
import { LoadingIndicatorContainer } from './LoadingIndicatorContainer';

export interface ILoadingIndicatorService {
	show(message: string, options?: ILoadingIndicatorOptions): Promise<void>;
}

export interface ILoadingIndicatorOptions {
}

class LoadingIndicatorService implements ILoadingIndicatorService {
	private container: any;
	private handler: any;

	show(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (this.container) {
				this.hide();
			}
			this.container = document.createElement('div');
			this.container.classList.add('snackbar-container');
			document.body.appendChild(this.container);

			render(
				<LoadingIndicatorContainer>
					<LoadingIndicator />
				</LoadingIndicatorContainer>,
				this.container
			);
		})
	}

	hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
			this.container = null;
			clearTimeout(this.handler);
		}
	}
}

export const loadingIndicatorService = new LoadingIndicatorService();
