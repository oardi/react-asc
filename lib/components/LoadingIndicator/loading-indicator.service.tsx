import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { LoadingIndicator } from './LoadingIndicator';
import { LoadingIndicatorContainer } from './LoadingIndicatorContainer';

export interface ILoadingIndicatorService {
	show(message: string): void;
}

class LoadingIndicatorService implements ILoadingIndicatorService {
	private container: HTMLDivElement | undefined;
	private handler: NodeJS.Timer | undefined;
	private root: Root | undefined;

	show() {
		if (this.container) {
			this.hide();
		}
		this.container = document.createElement('div');
		this.container.classList.add('snackbar-container');
		document.body.appendChild(this.container);

		this.root = createRoot(this.container);
		this.root.render(
			<LoadingIndicatorContainer isFixed={true}>
				<LoadingIndicator />
			</LoadingIndicatorContainer>
		);

	}

	hide() {
		if (this.container) {
			this.root?.unmount();
			document.body.removeChild(this.container);
			this.container = undefined;
			this.handler && clearTimeout(this.handler);
		}
	}
}

export const loadingIndicatorService = new LoadingIndicatorService();
