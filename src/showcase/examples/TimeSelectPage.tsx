import React, { Fragment, useEffect } from 'react';
import { ITimeSelectProps, TimeSelect } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const TimeSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITimeSelectProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<Fragment>
			<TimeSelect />
			{/* yearConfig={{ from: 2000, to: 2010 }}
				value={ new Date(2001, 11, 30) } */}
		</Fragment>
	);
}

export const TimeSelectPage = withOptions<ITimeSelectProps>(TimeSelectPageBase, {
}, 'TimeSelectPageBase');
