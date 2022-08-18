import React, { Fragment } from 'react';
import { IFormInputError } from './form.interfaces';
import styles from './FormError.module.scss';

interface IFormErrorProps {
	className?: string;
	errors?: IFormInputError[];
}

export const FormError = (props: IFormErrorProps): JSX.Element => {

	const { className = styles.isInvalid, errors = [] } = props;

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
