import React from 'react';
import { GlobalModal } from './GlobalModal';
import { IControls, IFormValues } from '../Form';
import { ReactElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { IModalButton } from './modal.interfaces';
import { SIZE } from '../component.enums';

export interface IModalService {
	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues>;
}

export interface IModalOptions {
	formControls?: IControls
	// showOkButton?: boolean;
	// showCancelButton?: boolean;
	isDismissable?: boolean;
	buttons?: Array<IModalButton>;
	fullScreen?: boolean;
	size?: SIZE;
}

class ModalService implements IModalService {
	private container: any;

	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues> {
		return new Promise((resolve, reject) => {
			if (!this.container) {
				this.container = document.createElement('div');
				document.body.appendChild(this.container);

				const handleOk = (values?: IFormValues) => {
					resolve(values);
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
						formControls={options && options.formControls}
						onCancel={handleCancel}
						onOk={handleOk}
						isDismissable={options && options.isDismissable}
						buttons={options && options.buttons}
					/>,
					this.container
				);
			}
		})
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
