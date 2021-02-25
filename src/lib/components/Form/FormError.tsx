import React, { Fragment } from 'react';
import { IFormInputError } from './form.interfaces';

interface IFormErrorProps {
	className?: string;
	errors?: Array<IFormInputError>;
}

export const FormError = (props: IFormErrorProps) => {

	const { className = 'invalid-feedback', errors = [] } = props;

	return (
		<Fragment>
			{
				errors &&
				<div className={className}>
					{errors.map(e => <div key={e.validator}>{e.message}</div>)}
				</div>
			}
		</Fragment>
	);
};
