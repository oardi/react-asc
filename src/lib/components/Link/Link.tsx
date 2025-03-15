import React, { useState } from 'react';
import { STATUS } from '../../enums';
import { useCssClasses } from '../../hooks';
import styles from './Link.module.scss';

export const Link = (props: React.ComponentProps<'a'>): React.JSX.Element => {
	const { href = '#', className, target, children, ...rest } = props;
	const [status, setStatus] = useState(STATUS.NORMAL);

	const [cssClassName] = useCssClasses([styles.link, className as string, status]);

	const onMouseEnter = (): void => {
		setStatus(STATUS.HOVERED);
	};

	const onMouseLeave = (): void => {
		setStatus(STATUS.NORMAL);
	};

	return (
		<a className={cssClassName} href={href} target={target} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...rest}>
			{children}
		</a>
	);
};
