import React, { useEffect } from 'react';
import type { ITimeSelectProps} from 'lib';
import { FormControl, TimeSelect } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';

const TimeSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITimeSelectProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			showHours: new FormControl(settingValues.showHours, [], 'checkbox', { label: 'show hours?' }),
			showMinutes: new FormControl(settingValues.showMinutes, [], 'checkbox', { label: 'show minutes?' }),
			showSeconds: new FormControl(settingValues.showSeconds, [], 'checkbox', { label: 'show seconds?' }),
			showMilliSeconds: new FormControl(settingValues.showMilliSeconds, [], 'checkbox', { label: 'show milliseconds?' }),
		});
	}, []);

	return (
		<TimeSelect
			showHours={settingValues.showHours}
			showMinutes={settingValues.showMinutes}
			showSeconds={settingValues.showSeconds}
			showMilliSeconds={settingValues.showMilliSeconds}
		/>
	);
};

export const TimeSelectPage: () => JSX.Element = withOptions<ITimeSelectProps>(TimeSelectPageBase, {
	showHours: true,
	showMinutes: true,
	showSeconds: false,
	showMilliSeconds: false
}, 'TimeSelectPageBase');
