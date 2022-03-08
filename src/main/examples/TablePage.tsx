import React, { useEffect } from 'react';
import { FormControl, ITableProps, Table } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const TablePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITableProps>) => {

	useEffect(() => {
		setSettingsControls({
			bordered: new FormControl(settingValues.bordered, [], 'checkbox', { label: 'bordered' }),
			hover: new FormControl(settingValues.hover, [], 'checkbox', { label: 'hover' }),
			striped: new FormControl(settingValues.striped, [], 'checkbox', { label: 'striped' }),
			responsive: new FormControl(settingValues.responsive, [], 'checkbox', { label: 'responsive' }),
		});
	}, []);

	return (
		<>
			<Table
				bordered={settingValues.bordered}
				hover={settingValues.hover}
				striped={settingValues.striped}
				responsive={settingValues.responsive}
			>
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First</th>
						<th scope="col">Last</th>
						<th scope="col">Handle</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td colSpan={2}>Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</Table>
		</>
	);
}

export const TablePage = withOptions<ITableProps>(TablePageBase,
	{
		hover: false,
		bordered: false,
		striped: false,
		responsive: false
	}, 'TablePageBase'
);
