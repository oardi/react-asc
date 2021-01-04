export interface HtmlBaseProps {
	className?: string;
	id?: string;
	name?: string;
	autoFocus?: boolean;
}

export interface HtmlInputProps extends HtmlBaseProps {
	onBlur?: (val: React.FocusEvent<HTMLInputElement>) => void;
	onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
	placeholder?: string;
}
