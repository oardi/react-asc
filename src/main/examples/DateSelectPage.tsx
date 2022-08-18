import React, { useEffect } from 'react';
import { DateSelect, IDateSelectProps } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const DateSelectPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>): JSX.Element => {

	useEffect(() => setSettingsControls({}), []);

	return (
		<DateSelect />
	);
};

export const DateSelectPage: () => JSX.Element = withOptions<IDateSelectProps>(DateSelectPageBase, {
}, 'DateSelectPageBase');
