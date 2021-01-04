import React from 'react';
import { GlobalModal } from './GlobalModal';
import { IControls, IFormValues } from '../Form';
import { ReactElement } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

export interface IModalOptions {
	formControls?: IControls
	showOkButton?: boolean;
	showCancelButton?: boolean;
	isDismissable?: boolean;
}

export class ModalService {
	private container: HTMLElement;

	show(title: string, description: string | ReactElement, options?: IModalOptions): Promise<void | IFormValues> {

		if (!this.container) {
			this.container = document.createElement('div');
			document.body.appendChild(this.container);

			return new Promise((resolve, reject) => {
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
						title={title}
						description={description}
						formControls={options && options.formControls}
						onCancel={handleCancel}
						onOk={handleOk}
						showCancelButton={options && options.showCancelButton}
						showOkButton={options && options.showOkButton}
						isDismissable={options && options.isDismissable}
					/>,
					this.container
				);
			})
		}
	}

	private hide() {
		if (this.container) {
			unmountComponentAtNode(this.container);
			document.body.removeChild(this.container);
			this.container = undefined;
		}
	}

}
