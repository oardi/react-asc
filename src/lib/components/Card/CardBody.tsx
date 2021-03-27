import React, { ReactNode } from 'react';
import styles from './CardBody.module.scss';

interface ICardBodyProps {
	children?: ReactNode;
}

export const CardBody = ({ children, ...rest }: ICardBodyProps) => (
	<div className={styles.cardBody} {...rest}>
		{children}
	</div>
);
