import { useEffect } from 'react';
import type { ITableProps } from 'src/lib';
import { FormControl, Table, TableBody, TableCell, TableHead, TableRow } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const TablePageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITableProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			hover: new FormControl(settingValues.hover, [], 'checkbox', { label: 'hover' }),
			responsive: new FormControl(settingValues.responsive, [], 'checkbox', { label: 'responsive' }),
		});
	}, []);

	return (
		<Table
			bordered={settingValues.bordered}
			hover={settingValues.hover}
			striped={settingValues.striped}
			responsive={settingValues.responsive}>
			<TableHead>
				<TableRow>
					<TableCell scope="col">#</TableCell>
					<TableCell scope="col">First</TableCell>
					<TableCell scope="col">Last</TableCell>
					<TableCell scope="col">Handle</TableCell>
				</TableRow>
			</TableHead>

			<TableBody>
				<TableRow>
					<TableCell component="th" scope="row">
						1
					</TableCell>
					<TableCell>Mark</TableCell>
					<TableCell>Otto</TableCell>
					<TableCell>@mdo</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						2
					</TableCell>
					<TableCell>Jacob</TableCell>
					<TableCell>Thornton</TableCell>
					<TableCell>@fat</TableCell>
				</TableRow>
				<TableRow>
					<TableCell component="th" scope="row">
						3
					</TableCell>
					<TableCell colSpan={2}>Larry the Bird</TableCell>
					<TableCell>@twitter</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
};

export const TablePage: () => React.JSX.Element = withOptions<ITableProps>(
	TablePageBase,
	{
		hover: false,
		bordered: false,
		striped: false,
		responsive: true,
	},
	'TablePageBase'
);
