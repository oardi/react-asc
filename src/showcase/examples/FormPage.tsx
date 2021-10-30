import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FormControl, Form, IControls, Button, VARIANT, COLOR, IFormProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';
import dayjs from 'dayjs';
import { loggerService } from '../../shared';

const CLASSNAME = 'ShowcaseForm';
export const FormPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFormProps>) => {
	const [values, setValues] = useState({});
	const myForm = useRef<Form>(null);

	useEffect(() => {
		setSettingsControls({
			validateOnBlur: new FormControl(settingValues.validateOnBlur, [], 'checkbox', { label: 'validateOnBlur' }),
		});
	}, []);

	const controls: IControls = {
		text: new FormControl('', ['required'], 'text', { label: 'Text', autoFocus: true, placeholder: 'Text' }),
		email: new FormControl('', ['email', 'required'], 'text', { label: 'E-Mail', hint: 'We will never share your email with anyone else' }),
		date: new FormControl('2017-06-01', [], 'date', { label: 'Date' }),
		dateTimeLocal: new FormControl(dayjs('2021-01-07T08:27:00Z').format('YYYY-MM-DDThh:mm'), [], 'datetime-local', { label: 'DateTimeLocal' }),
		radio: new FormControl('', [], 'radio', {
			label: 'Radio',
			options: [
				{ id: 'radioOption1', label: 'Option 1', value: 'option1' },
				{ id: 'radioOption2', label: 'Option 2', value: 'option2' }
			]
		}),
		textarea: new FormControl('', [], 'textarea', { label: 'Textarea', placeholder: 'some notes', textareaOptions: { rows: 3, resize: false } }),
		number: new FormControl('', [], 'number', { label: 'Number' }),
		password: new FormControl('', ['required'], 'password', { label: 'Password' }),
		passwordMatch: new FormControl('', ['required', 'match:password'], 'password', { label: 'Password Match' }),
		color: new FormControl('#FFFFFF', [], 'color', { label: 'Color' }),
		time: new FormControl('', [], 'time', { label: 'Time' }),
		file: new FormControl('', [], 'file', { label: 'File' }),
		checkbox: new FormControl('', [], 'checkbox', { label: 'Checkbox' }),
		select: new FormControl('option2', [], 'select', {
			label: 'Select',
			options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' }]
		}),
		selectMultiple: new FormControl(['option2'], [], 'select', {
			label: 'Select multiple',
			options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' }],
			selectOptions: { multiple: true }
		}),
		autoComplete: new FormControl('', [], 'autocomplete', {
			label: 'Autocomplete',
			options: [
				{ value: "1", label: 'one' },
				{ value: "2", label: 'two' },
				{ value: "3", label: 'three' },
				{ value: "4", label: 'four' },
				{ value: "5", label: 'five' },
				{ value: "6", label: 'six' },
				{ value: "7", label: 'seven' },
				{ value: "8", label: 'eight' },
				{ value: "9", label: 'nine' },
				{ value: "10", label: 'ten' },
				{ value: "11", label: 'eleven' },
				{ value: "12", label: 'twelve' },
				{ value: "13", label: 'thirteen' },
				{ value: "14", label: 'fourteen' },
				{ value: "15", label: 'fifteen' },
				{ value: "16", label: 'sixteen' },
				{ value: "17", label: 'seventeen' },
				{ value: "18", label: 'eighteen' },
				{ value: "19", label: 'nineteen' },
				{ value: "20", label: 'twenty' },
			]
		})
	};

	const onFormSubmit = (values: any) => {
		loggerService.debug(CLASSNAME, 'onFormSubmit', JSON.stringify(values, null, 2));
		setValues(values);
	};

	const handleClickSubmit = () => {
		loggerService.debug(CLASSNAME, 'handleClickSubmit');
		myForm?.current?.handleFormSubmit();
	}

	const handleClickReset = () => {
		loggerService.debug(CLASSNAME, 'handleClickReset');
		myForm?.current?.handleFormReset();
	}

	const onFormChange = (values: any) => {
		loggerService.debug(CLASSNAME, 'onFormChange', JSON.stringify(values, null, 2));
		setValues(values);
	}

	return (
		<Fragment>
			<Form
				ref={myForm}
				controls={controls}
				validateOnBlur={settingValues.validateOnBlur}
				onSubmit={onFormSubmit}
				onChange={onFormChange}
			/>

			<pre>
				{JSON.stringify(values, null, 2)}
			</pre>

			<div className="d-flex">
				<Button className="ml-auto" onClick={handleClickReset} variant={VARIANT.outline} color={COLOR.secondary}>
					reset
				</Button>
				<Button className="ml-2" onClick={handleClickSubmit}>
					submit
				</Button>
			</div>
		</Fragment>
	);
}

export const FormPage = withOptions<IFormProps>(FormPageBase, {
	controls: {},
	validateOnBlur: false
}, 'FormPageBase');
