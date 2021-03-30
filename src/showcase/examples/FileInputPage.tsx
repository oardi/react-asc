import React, { Fragment, useEffect } from 'react';
import { FileInput, FormControl, IFileInputProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const FileInputPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFileInputProps>) => {

	useEffect(() => {
		setSettingsControls({
			accept: new FormControl(settingValues.accept, [], 'text', { label: 'accept' }),
			multiple: new FormControl(settingValues.multiple, [], 'checkbox', { label: 'multiple' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnChange = (e: any) => {
		console.warn('handleOnChange', e);
	}

	return (
		<Fragment>
			<FileInput
				accept={settingValues.accept}
				multiple={settingValues.multiple}
				disabled={settingValues.disabled}
				onChange={handleOnChange}
			/>
		</Fragment>
	);
}

export const FileInputPage = withOptions<IFileInputProps>(FileInputPageBase, {
	accept: '*',
	multiple: false,
	disabled: false
});
