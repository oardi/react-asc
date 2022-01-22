import React, { Fragment, useEffect } from 'react';
import { DateSelect, IDateSelectProps } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const DateSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<Fragment>
			<DateSelect
			/>
			{/* yearConfig={{ from: 2000, to: 2010 }}
				value={ new Date(2001, 11, 30) } */}
		</Fragment>
	);
}

export const DateSelectPage = withOptions<IDateSelectProps>(DateSelectPageBase, {
}, 'DateSelectPageBase');
