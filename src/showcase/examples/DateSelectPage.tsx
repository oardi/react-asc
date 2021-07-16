import React, { Fragment, useEffect } from 'react';
import { DateSelect, IDateSelectProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const DateSelectPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<Fragment>
			<DateSelect />
		</Fragment>
	);
}

export const DateSelectPage = withOptions<IDateSelectProps>(DateSelectPageBase, {
}, 'DateSelectPageBase');
