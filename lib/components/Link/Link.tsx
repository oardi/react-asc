import { useCssClasses } from '../../hooks';
import React, { useState } from 'react';
import { STATUS } from '../component.enums';
import styles from './Link.module.scss';

export const Link = (props: React.ComponentProps<"a">) => {

	const { href = '#', className, target, children, ...rest } = props;
	const [status, setStatus] = useState(STATUS.NORMAL);

	const [cssClassName] = useCssClasses([styles.link, className as string, status]);

	const onMouseEnter = () => {
		setStatus(STATUS.HOVERED);
	};

	const onMouseLeave = () => {
		setStatus(STATUS.NORMAL);
	};

	return (
		<a
			className={cssClassName}
			href={href}
			target={target}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			{...rest}
		>
			{children}
		</a>
	);
};
