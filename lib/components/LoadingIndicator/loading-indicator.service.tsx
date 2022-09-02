import React from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { LoadingIndicator } from './LoadingIndicator';
import { LoadingIndicatorContainer } from './LoadingIndicatorContainer';

export interface ILoadingIndicatorService {
	show(message: string): void;
}

class LoadingIndicatorService implements ILoadingIndicatorService {
	private container: HTMLDivElement | undefined;
	private handler: NodeJS.Timer | undefined;
	private root: Root | undefined;

	show(): void {
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

	hide(): void {
		if (this.container) {
			this.root?.unmount();
			document.body.removeChild(this.container);
			this.container = undefined;
			this.handler && clearTimeout(this.handler);
		}
	}
}

export const loadingIndicatorService: LoadingIndicatorService = new LoadingIndicatorService();
