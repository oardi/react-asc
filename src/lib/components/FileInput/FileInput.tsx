import React, { useRef } from 'react';

export interface IFileInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	name?: string;
	value?: string;
}

export const FileInput = (props: IFileInputProps) => {

	const { id, checked, className = '', name, multiple = false, accept, disabled, onChange, readOnly, ...rest } = props;
	const inputFileElement = useRef<HTMLInputElement>(null);

	const getCssClass = () => {
		const result = [];
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	const handleOnChange = (event: any) => {
		const values = event.target.files;
		onChange && onChange(values);
	}

	return (
		<input
			type="file"
			ref={inputFileElement}
			className={getCssClass()}
			id={id}
			name={name}
			multiple={multiple}
			accept={accept}
			disabled={disabled}
			readOnly={readOnly}
			hidden={false}
			onChange={handleOnChange}
			{...rest}
		/>
	);
}
