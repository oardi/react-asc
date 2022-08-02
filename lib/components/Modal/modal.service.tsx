import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { GlobalModal } from './GlobalModal';
import { IControls } from '../Form';
import { ReactElement } from 'react';
import { IModalButton } from './modal.interfaces';
import { SIZE } from '../component.enums';

export interface IModalService {
	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void>;
}

export interface IModalOptions {
	isDismissable?: boolean;
	buttons?: Array<IModalButton>;
	fullScreen?: boolean;
	size?: SIZE;
}

export interface IModalFormOptions extends IModalOptions {
	formControls?: IControls;
}

class ModalService implements IModalService {
	private container: HTMLElement | undefined;

	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.container) {
				this.container = document.createElement('div');
				document.body.appendChild(this.container);

				const handleOk = () => {
					resolve();
					this.hide();
				}

				const handleCancel = () => {
					reject();
					this.hide();
				}

				render(
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
					/>,
					this.container
				);
			}
		});
	}

	showForm<T>(title: string, options?: IModalFormOptions): Promise<T> {
		return new Promise((resolve, reject) => {
			if (!this.container) {
				this.container = document.createElement('div');
				document.body.appendChild(this.container);

				const handleOk = (values?: unknown) => {
					resolve(values as T);
					this.hide();
				}

				// TODO - for AutoComplete
				// const handleOnChange = (values?: IFormValues) => {
				// 	console.info(values);
				// }

				const handleCancel = () => {
					reject();
					this.hide();
				}

				render(
					<GlobalModal
						fullScreen={options && options.fullScreen}
						size={options && options.size}
						title={title}
						formControls={options && options.formControls}
						onCancel={handleCancel}
						onBackdropClick={handleCancel}
						onOk={handleOk}
						isDismissable={options && options.isDismissable}
						buttons={options && options.buttons}
					/>,
					this.container
				);
			}
		});
	}

	private hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
			this.container = undefined;
		}
	}

}

export const modalService = new ModalService();
