import React, { useEffect } from 'react';
import type { IDatePickerProps, IDateSelectProps } from 'lib';
import { DatePicker } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';

const DatePickerPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>): JSX.Element => {

	useEffect(() => setSettingsControls({}), []);

	return (
		<DatePicker
			selectRange={true}
		/>
	);
};

export const DatePickerPage: () => JSX.Element = withOptions<IDatePickerProps>(DatePickerPageBase, {
}, 'DatePickerPageBase');
