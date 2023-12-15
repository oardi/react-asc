import type { IFileInputProps } from 'lib';
import { FileInput, FormControl, snackbarService } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const FileInputPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFileInputProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			accept: new FormControl(settingValues.accept, [], 'text', { label: 'accept' }),
			multiple: new FormControl(settingValues.multiple, [], 'checkbox', { label: 'multiple' }),
			deletable: new FormControl(settingValues.deletable, [], 'checkbox', { label: 'deletable' }),
			disabled: new FormControl(settingValues.disabled, [], 'checkbox', { label: 'disabled' }),
		});
	}, []);

	const handleOnChange = (): void => {
		void snackbarService.show(`FileInput changed`);
	};

	return (
		<>
			<FileInput
				accept={settingValues.accept}
				multiple={settingValues.multiple}
				deletable={settingValues.deletable}
				disabled={settingValues.disabled}
				onChange={handleOnChange}>
				choose a file
			</FileInput>
		</>
	);
};

export const FileInputPage: () => JSX.Element = withOptions<IFileInputProps>(
	FileInputPageBase,
	{
		accept: '*',
		multiple: false,
		disabled: false,
	},
	'FileInputPageBase'
);
