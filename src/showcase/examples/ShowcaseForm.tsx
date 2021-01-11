import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../AppContext';
import { FormControl, Form, IControls, Button, VARIANT, COLOR, IFormProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';
import dayjs from 'dayjs';

const CLASSNAME = 'ShowcaseForm';
export const ShowcaseFormBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFormProps>) => {
	const { loggerService } = useContext(AppContext);
	const [values, setValues] = useState({});
	const myForm = useRef<Form>();

	useEffect(() => {
		setSettingsControls({
			validateOnBlur: new FormControl(settingValues.validateOnBlur, [], 'checkbox', { label: 'validateOnBlur' }),
		});
	}, []);

	const controls: IControls = {
		select: new FormControl('', [], 'select', {
			label: 'Select',
			options: [{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }]
		}),
		text: new FormControl('', ['required'], 'text', { label: 'Text', autoFocus: true, placeholder: 'Firstname' }),
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
		color: new FormControl('#FFFFFF', [], 'color', { label: 'Color' }),
		time: new FormControl('', [], 'time', { label: 'Time' }),
		file: new FormControl('', [], 'file', { label: 'File' }),
		checkbox: new FormControl('', [], 'checkbox', { label: 'Checkbox' }),
		checkBoxGroup: new FormControl(['option2'], [], 'checkboxgroup', {
			label: 'CheckBoxGroup',
			options: [
				{ id: 'checkboxOption1', label: 'Option 1', value: 'option1' },
				{ id: 'checkboxOption2', label: 'Option 2', value: 'option2' },
				{ id: 'checkboxOption3', label: 'Option 3', value: 'option3' },
			]
		}),
	};

	const onFormSubmit = (values) => {
		loggerService.debug(CLASSNAME, 'onFormSubmit', JSON.stringify(values, null, 2));
		setValues(values);
	};

	const handleClickSubmit = () => {
		loggerService.debug(CLASSNAME, 'handleClickSubmit');
		myForm.current.handleFormSubmit();
	}

	const handleClickReset = () => {
		loggerService.debug(CLASSNAME, 'handleClickReset');
		myForm.current.handleFormReset();
	}

	const onFormChange = (values) => {
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

export const ShowcaseForm = withOptions<IFormProps>(ShowcaseFormBase, {
	controls: {},
	validateOnBlur: false
});
