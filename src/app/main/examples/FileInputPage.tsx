import { useEffect } from 'react';
import type { IFileInputProps } from 'src/lib';
import { FileInput, FormControl, snackbarService } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const FileInputPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFileInputProps>): React.JSX.Element => {
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

export const FileInputPage: () => React.JSX.Element = withOptions<IFileInputProps>(
	FileInputPageBase,
	{
		accept: '*',
		multiple: false,
		disabled: false,
	},
	'FileInputPageBase'
);
