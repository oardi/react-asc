import type { IDateSelectProps } from 'lib';
import { DateSelect } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const DateSelectPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>): JSX.Element => {
	useEffect(() => setSettingsControls({}), []);

	return <DateSelect />;
};

export const DateSelectPage: () => JSX.Element = withOptions<IDateSelectProps>(DateSelectPageBase, {}, 'DateSelectPageBase');
