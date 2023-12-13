import type { IContainerProps } from 'lib';
import { Column, FormControl, Row } from 'lib';
import { useEffect } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const GridPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IContainerProps>): JSX.Element => {
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

export const GridPage: () => JSX.Element = withOptions(
	GridPageBase,
	{
		direction: 'row',
	},
	'GridPageBase'
);
