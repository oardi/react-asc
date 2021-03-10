interface IConditionalWrapperProps {
	condition: boolean;
	wrapper: (children: React.ReactNode) => any;
	children: React.ReactNode;
}

export const ConditionalWrapper = ({ condition, wrapper, children }: IConditionalWrapperProps) =>
	condition ? wrapper(children) : children;
