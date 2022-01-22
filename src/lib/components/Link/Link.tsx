import React, { useState } from 'react';
import { STATUS } from '../component.enums';

export const Link = (props: React.ComponentProps<"a">) => {

	const { href, className, target, children } = props;
	const [status, setStatus] = useState(STATUS.NORMAL);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		status !== STATUS.NORMAL && cssClasses.push(status);
		return cssClasses.filter(css => css).join(' ');
	};

	const onMouseEnter = () => {
		setStatus(STATUS.HOVERED);
	};

	const onMouseLeave = () => {
		setStatus(STATUS.NORMAL);
	};

	return (
		<a
			className={getCssClasses()}
			href={href || '#'}
			target={target}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</a>
	);
};
