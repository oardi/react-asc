import { useEffect } from 'react';
import type { IDateSelectProps } from 'src/lib';
import { DateSelect } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const DateSelectPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IDateSelectProps>): React.JSX.Element => {
	useEffect(() => setSettingsControls({}), []);

	return <DateSelect />;
};

export const DateSelectPage: () => React.JSX.Element = withOptions<IDateSelectProps>(DateSelectPageBase, {}, 'DateSelectPageBase');
