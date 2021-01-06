import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../AppContext';
import { FormControl, Form, IControls, Button, VARIANT, COLOR, IFormProps } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const CLASSNAME = 'ShowcaseForm';
export const ShowcaseFormBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IFormProps>) => {
	const { loggerService } = useContext(AppContext);
	const [values, setValues] = useState({});
	const myForm = useRef<Form>();

	// const myDynamicForm = useRef<Form>();
	// const [myDynamiccontrols, setMyDynamiccontrols] = useState<IControls>(null);

	useEffect(() => {
		setSettingsControls({
			validateOnBlur: new FormControl(settingValues.validateOnBlur, [], 'checkbox', { label: 'validateOnBlur' }),
		});

		// setMyDynamiccontrols({
		// 	myTest: new FormControl('', [], 'text', { label: 'myTest' }),
		// });
	}, []);

	const controls: IControls = {
		gender: new FormControl('', [], 'select', {
			label: 'Gender',
			options: [{ label: 'female', value: 'female' }, { label: 'male', value: 'male' }]
		}),
		firstName: new FormControl('', ['required'], 'text', { label: 'Firstname', autoFocus: true, placeholder: 'Firstname' }),
		lastName: new FormControl('', [], 'text', { label: 'Lastname' }),
		birthdate: new FormControl('2017-06-01', [], 'date', { label: 'Birthdate' }),
		email: new FormControl('', ['email', 'required'], 'text', { label: 'E-Mail', hint: 'We will never share your email with anyone else' }),
		optionsRadio: new FormControl('', [], 'radio', {
			label: 'Options',
			options: [
				{ id: 'radioOption1', label: 'Option 1', value: 'option1' },
				{ id: 'radioOption2', label: 'Option 2', value: 'option2' }
			]
		}),
		notes: new FormControl('', [], 'textarea', { label: 'Notes', placeholder: 'some notes', textareaOptions: { rows: 3, resize: false } }),
		yearsOfExperience: new FormControl('', [], 'number', { label: 'Years of Experience' }),
		password: new FormControl('', ['required'], 'password', { label: 'Password' }),
		color: new FormControl('#FFFFFF', [], 'color', { label: 'Favourite color' }),
		time: new FormControl('', [], 'time', { label: 'Time' }),
		file: new FormControl('', [], 'file', { label: 'File' }),
		agb: new FormControl('', [], 'checkbox', { label: 'AGB' }),
		optionsCheck: new FormControl(['option2'], [], 'checkboxgroup', {
			label: 'Options',
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
		loggerService.debug(CLASSNAME, 'onFormChange', values);
		setValues(values);
	}

	// const handleChangeDynamicControls = () => {
	// 	loggerService.warn(CLASSNAME, 'handleChangeDynamicControls');
	// 	// setMyDynamiccontrols(null);
	// 	myDynamicForm.current.destroy();
	// 	setMyDynamiccontrols({
	// 		anotherControl: new FormControl('some default value', [], 'text', { label: 'another control' }),
	// 	});
	// }

	return (
		<Fragment>

			<Form
				ref={myForm}
				controls={controls}
				validateOnBlur={settingValues.validateOnBlur}
				onSubmit={onFormSubmit}
				onChange={onFormChange}
			/>

			<div className="d-flex">
				<Button className="ml-auto" onClick={handleClickReset} variant={VARIANT.outline} color={COLOR.secondary}>
					reset
				</Button>
				<Button className="ml-2" onClick={handleClickSubmit}>
					submit
				</Button>
			</div>

			{/* <pre>
				{JSON.stringify(values, null, 4)}
			</pre>

			{/* <Form
				ref={myDynamicForm}
				controls={myDynamiccontrols}
				onSubmit={onFormSubmit}
			/>

			<Button onClick={handleChangeDynamicControls}>
				change dynamic controls
			</Button>
			<Button className="ml-2" onClick={() => myDynamicForm.current.handleFormSubmit()}>
				submit
			</Button> */}

		</Fragment>
	);
}

export const ShowcaseForm = withOptions<IFormProps>(ShowcaseFormBase, {
	controls: {},
	validateOnBlur: false
});
