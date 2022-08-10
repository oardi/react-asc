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

			{/* <Row>
			</Row> */}

			{/* <Row>
				<Column xs={12} md={4}>col 1</Column>
				<Column xs={6} md={4}>col 2</Column>
				<Column xs={6} md={4}>col 3</Column>
			</Row>

			<Row>
				<Column xs={2}>col 1</Column>
				<Column xs={2}>col 2</Column>
				<Column xs={2}>col 3</Column>
				<Column xs={2}>col 4</Column>
				<Column xs={2}>col 5</Column>
				<Column xs={2}>col 6</Column>
			</Row> */}
		</Row>
	);
};

export const GridPage = withOptions(GridPageBase, {
	direction: 'row'
}, 'GridPageBase');
