import React, { ReactElement } from 'react';

export interface IWrapperProps {
	as: string;
	children: ReactElement;
	className?: string;
}

const Wrapper = ({ as, children, className, ...rest }: IWrapperProps) =>
	as ? React.createElement(as, { ...rest, className: `${className} gutter-bottom` }, children) : <span>{children}</span>;


export interface ITypographyProps {
	as: string;
	children: any
	className?: string;
}

export const Typography = ({ children, as = 'span', ...rest }: ITypographyProps) => {
	return (
		<Wrapper as={as} {...rest}>
			{children}
		</Wrapper>
	)
}
