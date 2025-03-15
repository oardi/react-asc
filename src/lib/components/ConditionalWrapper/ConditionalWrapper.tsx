import type React from 'react';

interface IConditionalWrapperProps {
	condition: boolean;
	wrapper: (children: React.ReactNode) => React.JSX.Element;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: IConditionalWrapperProps): React.JSX.Element =>
	condition ? wrapper(children) : children;
