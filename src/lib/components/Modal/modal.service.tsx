import type { ReactElement } from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import type { SIZE } from '../../enums';
import type { IControls } from '../Form';
import { GlobalModal } from './GlobalModal';
import type { IModalButton } from './modal.interfaces';

export interface IModalService {
	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void>;
}

export interface IModalOptions {
	isDismissable?: boolean;
	buttons?: IModalButton[];
	fullScreen?: boolean;
	size?: SIZE;
}

class ModalService implements IModalService {
	private container: HTMLElement | undefined;
	private root: Root | undefined;

	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.container) {
				this.container = document.createElement('div');
				document.body.appendChild(this.container);

				const handleOk = (): void => {
					resolve();
					this.hide();
				};

				const handleCancel = (): void => {
					reject();
					this.hide();
				};

				this.root = createRoot(this.container);
				this.root.render(
					<GlobalModal
						fullScreen={options && options.fullScreen}
						size={options && options.size}
						title={title}
						description={description}
						onCancel={handleCancel}
						onBackdropClick={handleCancel}
						onOk={handleOk}
						isDismissable={options && options.isDismissable}
						buttons={options && options.buttons}
					/>
				);
			}
		});
	}

	showForm<T>(title: string, formControls: IControls, options?: IModalOptions): Promise<T> {
		return new Promise((resolve, reject) => {
			if (!this.container) {
				this.container = document.createElement('div');
				this.container.classList.add('modal-container');

				const handleOk = (values?: unknown): void => {
					resolve(values as T);
					this.hide();
				};

				const handleCancel = (): void => {
					reject();
					this.hide();
				};

				this.root = createRoot(this.container);
				this.root.render(
					<GlobalModal
						fullScreen={options && options.fullScreen}
						size={options && options.size}
						title={title}
						formControls={formControls}
						onCancel={handleCancel}
						onBackdropClick={handleCancel}
						onOk={handleOk}
						isDismissable={options && options.isDismissable}
						buttons={options && options.buttons}
					/>
				);
			}
		});
	}

	private hide(): void {
		if (this.container) {
			this.root?.unmount();
			// document.body.removeChild(this.container);
			this.container = undefined;
		}
	}
}

export const modalService: ModalService = new ModalService();
