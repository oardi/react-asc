import React, { ReactNode, useState } from 'react';
import { STATUS } from '../component.enums';

export interface ILinkProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
	url?: string;
	children?: ReactNode;
	target?: string;
}

export const Link = (props: ILinkProps) => {

	const { url, className, target, children } = props;
	const [status, setStatus] = useState(STATUS.NORMAL);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		// cssClasses.push(styles.badgeContainer);
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
			href={url || '#'}
			target={target}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</a>
	);
};
