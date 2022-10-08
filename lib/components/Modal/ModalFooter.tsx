import React from 'react';
import styles from './ModalFooter.module.scss';

interface IModalFooterProps extends React.ComponentProps<'div'> {
	shadow?: boolean;
}

export const ModalFooter = (props: IModalFooterProps): JSX.Element => {

	const { children, shadow, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.modalFooter);
		shadow && cssClasses.push(styles.shadow);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
