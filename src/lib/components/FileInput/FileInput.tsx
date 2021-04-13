import React, { useRef, useState } from 'react';
import { Button } from '../Button';
import { Chip } from '../Chip';

export interface IFileInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}

export const FileInput = (props: IFileInputProps) => {

	const { id, checked, className = '', name, multiple = false, accept, disabled, onChange, readOnly, value, ...rest } = props;
	const inputFileElement = useRef<HTMLInputElement>(null);

	const [fileList, setFileList] = useState<FileList>();

	const getCssClass = () => {
		const result = [];
		result.push(className);
		return result.filter(r => r).join(' ');
	}

	const handleOnChange = (event: any) => {
		const values = event.target.files as FileList;
		setFileList(values);
		onChange && onChange(event);
	}

	return (
		<div className="d-flex align-items-center flex-wrap">
			<Button disabled={disabled} onClick={() => inputFileElement.current?.click()}>
				{multiple ? 'choose files' : 'choose a file'}
			</Button>

			{fileList && Array.from(fileList).map((file) =>
				<div key={file.name} className="ml-2">
					<Chip>
						{file.name}
					</Chip>
				</div>
			)}

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
				hidden={true}
				onChange={handleOnChange}
				value={value}
				{...rest}
			/>
		</div>
	);
}
