import React, { Fragment, useEffect } from 'react';
import { FormControl, ITimeSelectProps, TimeSelect } from '../../../src';
import { IShowcaseBaseProps, withOptions } from './components';

const TimeSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITimeSelectProps>) => {

	useEffect(() => {
		setSettingsControls({
			showHours: new FormControl(settingValues.showHours, [], 'checkbox', { label: 'show hours?' }),
			showMinutes: new FormControl(settingValues.showMinutes, [], 'checkbox', { label: 'show minutes?' }),
			showSeconds: new FormControl(settingValues.showSeconds, [], 'checkbox', { label: 'show seconds?' }),
			showMilliSeconds: new FormControl(settingValues.showMilliSeconds, [], 'checkbox', { label: 'show milliseconds?' }),
		});
	}, []);

	return (
		<Fragment>
			<TimeSelect
				showHours={settingValues.showHours}
				showMinutes={settingValues.showMinutes}
				showSeconds={settingValues.showSeconds}
				showMilliSeconds={settingValues.showMilliSeconds}
			/>
		</Fragment>
	);
}

export const TimeSelectPage = withOptions<ITimeSelectProps>(TimeSelectPageBase, {
	showHours: true,
	showMinutes: true,
	showSeconds: false,
	showMilliSeconds: false
}, 'TimeSelectPageBase');
