import React, { useEffect } from 'react';
import { Column, IContainerProps, FormControl, Row } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const GridPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IContainerProps>) => {

	useEffect(() => {
		setSettingsControls({
			direction: new FormControl(settingValues.direction, [], 'select', { label: 'direction', options: ['row', 'row-reverse', 'column', 'column-reverse'].map(c => ({ label: c, value: c })) }),
		});
	}, []);

	return (
		<Row direction={settingValues.direction}>
			<Column>col 1</Column>
			<Column>col 2</Column>
			<Column>col 3</Column>
		</Row>
	);
};

export const GridPage: () => JSX.Element = withOptions(GridPageBase, {
	direction: 'row'
}, 'GridPageBase');
