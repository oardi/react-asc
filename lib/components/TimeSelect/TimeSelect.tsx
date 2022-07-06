import React, { useState } from 'react';
import { Row, Column } from '../Grid';
import { FormLabel } from '../Form';
import { HourSelect } from './HourSelect';
import { MilliSecondSelect } from './MilliSecondSelect';
import { MinuteSelect } from './MinuteSelect';
import { SecondSelect } from './SecondSelect';

export enum TIMEMODE { HOUR, MINUTE, SECONDS, MILLISECONDS }

export interface ITimeSelectProps {
	value?: Date;
	className?: string;
	id?: string;
	name?: string;
	showHours?: boolean;
	showMinutes?: boolean;
	showSeconds?: boolean;
	showMilliSeconds?: boolean;
	disabled?: boolean;
	onChange?: (val: Date) => void;
}

export const TimeSelect = (props: ITimeSelectProps) => {

	const {
		className,
		value = new Date(),
		disabled,
		showHours = true,
		showMinutes = true,
		showSeconds = false,
		showMilliSeconds = false,
		onChange
	} = props;

	const [currDate, setCurrDate] = useState<Date>(value);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('row');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleOnChange = (e: number, mode: TIMEMODE) => {
		const currYear = currDate.getFullYear();
		const currMonth = currDate.getMonth();
		const currday = currDate.getDate();

		const currHour = mode === TIMEMODE.HOUR ? e : currDate.getHours();
		const currMinute = mode === TIMEMODE.MINUTE ? e : currDate.getMinutes();
		const currSeconds = mode === TIMEMODE.SECONDS ? e : currDate.getSeconds();
		const currMilliSeconds = mode === TIMEMODE.MILLISECONDS ? e : currDate.getMilliseconds();

		const newDate = new Date(currYear, currMonth, currday, currHour, currMinute, currSeconds, currMilliSeconds);

		setCurrDate(newDate);
		onChange && onChange(newDate);
	}

	return (
		<Row className={getCssClasses()}>
			{showHours &&
				<Column>
					<FormLabel>Hours</FormLabel>
					<HourSelect
						value={currDate.getHours()}
						disabled={disabled}
						onChange={e => handleOnChange(e, TIMEMODE.HOUR)}
					/>
				</Column>
			}

			{showMinutes &&
				<Column>
					<FormLabel>Minutes</FormLabel>
					<MinuteSelect
						value={currDate.getMinutes()}
						disabled={disabled}
						onChange={e => handleOnChange(e, TIMEMODE.MINUTE)}
					/>
				</Column>
			}

			{showSeconds &&
				<Column>
					<FormLabel>Seconds</FormLabel>
					<SecondSelect
						value={currDate.getSeconds()}
						disabled={disabled}
						onChange={e => handleOnChange(e, TIMEMODE.SECONDS)}
					/>
				</Column>
			}

			{showMilliSeconds &&
				<Column>
					<FormLabel>Milliseconds</FormLabel>
					<MilliSecondSelect
						value={currDate.getMilliseconds()}
						disabled={disabled}
						onChange={e => handleOnChange(e, TIMEMODE.MILLISECONDS)}
					/>
				</Column>
			}
		</Row>
	);
}
