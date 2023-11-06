import type { IDatePickerProps } from 'lib';
import { Button, DatePicker, Menu } from 'lib';
import { useEffect, useState } from 'react';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const DatePickerPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IDatePickerProps>): JSX.Element => {
	useEffect(
		() =>
			setSettingsControls({
				// selectRange: new FormControl(settingValues.selectRange, [], 'checkbox', { label: 'select range?' }),
				// minDate: new FormControl(new Date('1970-01-01'), [], 'date', { label: 'Min Date' }),
				// maxDate: new FormControl(new Date(), [], 'date', { label: 'Max Date' }),
			}),
		[]
	);

	const [currDate, setCurrDate] = useState<Date>(new Date());
	const [open, setOpen] = useState(false);

	const handleClickDateInMenu = (val: Date): void => {
		setCurrDate(val);
		setOpen(false);
	};

	return (
		<>
			<DatePicker onChange={setCurrDate} />
			<p>selected date: {currDate?.toString()}</p>
			<Menu
				toggle={<Button onClick={(): void => setOpen(true)}>show Datepicker in menu</Button>}
				open={open}
				onClickBackdrop={(): void => setOpen(false)}>
				<DatePicker onChange={(val: Date): void => handleClickDateInMenu(val)} />
			</Menu>
		</>
	);
};

export const DatePickerPage: () => JSX.Element = withOptions<IDatePickerProps>(DatePickerPageBase, {}, 'DatePickerPageBase');
