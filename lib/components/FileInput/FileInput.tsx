import React, { useRef, useState } from 'react';
import { Button } from '../Button';
import { Chip } from '../Chip';

export interface IFileInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	deletable?: boolean;
}

export const FileInput = (props: IFileInputProps) => {

	const {
		id,
		checked,
		className,
		children,
		name,
		multiple = false,
		accept,
		disabled,
		onChange,
		readOnly,
		value,
		deletable = false,
		...rest
	} = props;
	const inputFileElement = useRef<HTMLInputElement>(null);

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [model, setModel] = useState<any>(value);
	const [fileList, setFileList] = useState<FileList>();

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(r => r).join(' ');
	}

	const handleOnChange = (event: any) => {
		const values = event.target.files as FileList;
		setFileList(values);
		onChange && onChange(event);
	}

	const handleOnDelete = (file: File) => {
		// TODO - setModel
		alert('coming soon');
	}

	return (
		<div className="d-flex align-items-start">
			<Button className="flex-wrap" disabled={disabled} onClick={() => inputFileElement.current?.click()}>
				{children}
			</Button>

			<div className="d-flex align-items-center flex-wrap ml-1">
				{fileList && Array.from(fileList).map((file) =>
					<Chip
						key={file.name}
						isDeletable={deletable}
						onDelete={() => handleOnDelete(file)}
					>
						{file.name}
					</Chip>
				)}
			</div>

			<input
				type="file"
				ref={inputFileElement}
				className={getCssClasses()}
				id={id}
				name={name}
				multiple={multiple}
				accept={accept}
				disabled={disabled}
				readOnly={readOnly}
				hidden={true}
				onChange={handleOnChange}
				value={model}
				{...rest}
			/>
		</div>
	);
}
