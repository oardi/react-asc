import { Fragment } from 'react';
import styles from './FormError.module.scss';
import type { IFormInputError } from './form.interfaces';

interface IFormErrorProps {
	className?: string;
	errors?: IFormInputError[];
}

export const FormError = (props: IFormErrorProps): JSX.Element => {
	const { className = styles.isInvalid, errors = [] } = props;

	return (
		<Fragment>
			{errors && (
				<div className={className}>
					{errors.map(e => (
						<div key={e.validator}>{e.message}</div>
					))}
				</div>
			)}
		</Fragment>
	);
};
