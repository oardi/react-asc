import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './DatePicker.module.scss';

export interface IDatePickerProps {
	value?: Date;
	selectRange?: boolean;
	minDate?: Date;
	maxDate?: Date;
	// className?: string;
	// disabled?: boolean;
	onChange?: (val: Date) => void;
}

export const DatePicker = (props: IDatePickerProps): JSX.Element => {

	const {
		value = new Date(),
		selectRange,
		minDate,
		maxDate,
		// disabled,
		onChange,
		...rest
	} = props;
	const [currDate, setCurrDate] = useState<Date>(value);

	const handleOnChange = (e: Date): void => {
		setCurrDate(e);
		onChange && onChange(e);
	};

	return (
		<Calendar
			className={styles.datePicker}
			value={currDate}
			minDate={minDate}
			maxDate={maxDate}
			selectRange={selectRange}
			onChange={handleOnChange}
			{...rest}
		/>
	);
};
