import React from 'react';
import styles from './Typography.module.scss';

export interface IWrapperProps {
	as?: string;
	children: React.ReactNode;
	className?: string;
	wrap?: boolean;
}

const Wrapper = (props: IWrapperProps): React.JSX.Element => {
	const { as = 'span', wrap, children, className, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.typography);
		cssClasses.push(styles.as);
		wrap && cssClasses.push(styles.wrap);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return React.createElement(as, { ...rest, className: getCssClasses() }, children);
};

export interface ITypographyProps extends React.ComponentProps<'span'> {
	as?: string;
	wrap?: boolean;
}

export const Typography = ({ children, as = 'span', wrap, ...rest }: ITypographyProps): React.JSX.Element => {
	return (
		<Wrapper as={as} wrap={wrap} {...rest}>
			{children}
		</Wrapper>
	);
};
