import React, { Fragment } from 'react';
import { IFormInputError } from './form.interfaces';

interface IFormErrorProps {
	className?: string;
	errors?: Array<IFormInputError>;
}

export const FormError = ({ className = 'invalid-feedback', errors = [] }: IFormErrorProps) => {
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
