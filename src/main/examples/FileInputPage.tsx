import React, { useEffect } from 'react';
import { FileInput, FormControl, IFileInputProps, snackbarService } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const FileInputPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFileInputProps>) => {

	useEffect(() => {
		setSettingsControls({
			accept: new FormControl(settingValues.accept, [], 'text', { label: 'accept' }),
			multiple: new FormControl(settingValues.multiple, [], 'checkbox', { label: 'multiple' }),
			deletable: new FormControl(settingValues.deletable, [], 'checkbox', { label: 'deletable' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnChange = () => {
		snackbarService.show(`FileInput changed`);
	}

	return (
		<>
			<FileInput
				accept={settingValues.accept}
				multiple={settingValues.multiple}
				deletable={settingValues.deletable}
				disabled={settingValues.disabled}
				onChange={handleOnChange}
			>
				choose a file
			</FileInput>
		</>
	);
}

export const FileInputPage = withOptions<IFileInputProps>(FileInputPageBase, {
	accept: '*',
	multiple: false,
	disabled: false
}, 'FileInputPageBase');
