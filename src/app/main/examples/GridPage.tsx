import { useEffect } from 'react';
import type { IContainerProps } from 'src/lib';
import { Column, FormControl, Row } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const GridPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IContainerProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			direction: new FormControl(settingValues.direction, [], 'select', {
				label: 'direction',
				options: ['row', 'row-reverse', 'column', 'column-reverse'].map(c => ({ label: c, value: c })),
			}),
		});
	}, []);

	return (
		<Row direction={settingValues.direction}>
			<Column size={20}>col 20%</Column>
			<Column>col auto width</Column>
			<Column>col auto width</Column>
		</Row>
	);
};

export const GridPage: () => React.JSX.Element = withOptions(
	GridPageBase,
	{
		direction: 'row',
	},
	'GridPageBase'
);
