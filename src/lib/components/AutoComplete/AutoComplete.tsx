import { useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { ISelectOption } from '../component.interfaces';
import { List, ListItem, ListItemText } from '../List';
import styles from './AutoComplete.module.scss';

export interface IAutoCompleteProps {
	id?: string;
	name?: string;
	className?: string;
	options?: Array<ISelectOption>;
	value?: string | Array<string>;
	multiple?: boolean;
	multipleMaxCountItems?: number;
	disabled?: boolean;
	readOnly?: boolean;
	onChange?: (val: string | Array<string>) => void;
	onKeyDown?: (event: any) => void;
}

// enter -> delay? -> show results
// single
// multiple
// custom template render items

export const AutoComplete = (props: IAutoCompleteProps) => {

	const {
		id,
		name,
		className,
		options = [],
		value = '',
		multiple,
		// multipleMaxCountItems = 5,
		disabled,
		readOnly,
		onChange,
		// onKeyDown
	} = props;

	const [model, setModel] = useState<string | Array<string>>('');
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [isShow, setIsShow] = useState<boolean>(false);

	const [selectedOptions, setSelectedOptions] = useState<Array<ISelectOption>>([]);

	const selectConainter = useRef<HTMLDivElement>(null);

	const [optionsTemp, setOptionsTemp] = useState<Array<ISelectOption>>([]);

	useEffect(()=>{
		const optionsOrigin: Array<ISelectOption> = JSON.parse(JSON.stringify(options));
		setOptionsTemp(optionsOrigin);
	}, [options]);

	useEffect(() => {
		const newValue = !!value ? value : '';
		writeValue(newValue);
		if (newValue) {
			const option = options.find(o => o.value === newValue);
			if (option) {
				setHoverIndex(options.indexOf(option));
			}
		}
	}, [value, options]);

	useEffect(() => {
		if (!multiple) {
			const newOption = options.find(o => o.value === model);
			if (newOption) {
				setSelectedOptions([newOption]);
			}
		} else {
			const filteredOptions = options.filter(o => model.indexOf(o.value) >= 0);
			setSelectedOptions([...filteredOptions]);
		}
	}, [model, multiple]);

	const writeValue = (val: string | Array<string>) => setModel(val);

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		cssClasses.push(styles.select);
		return cssClasses.filter(r => r).join(' ');
	}

	const show = () => setIsShow(true);
	const hide = () => setIsShow(false);
	const isActive = (option: ISelectOption) => {
		return selectedOptions.indexOf(option) >= 0 || hoverIndex === options.indexOf(option);
	}

	const handleOnClick = (option: ISelectOption) => {
		let newValue: string | Array<string> = multiple ? [] : '';

		if (!multiple) {
			if (model !== option.value) {
				newValue = option.label as string;
				onChange && onChange(newValue);
			}
			hide();
		} else {
			const selectedOption = selectedOptions.find(o => o.value === option.value);
			if (selectedOption) {
				newValue = selectedOptions.filter(o => o.value !== option.value).map(o => o.value);
			} else {
				newValue = (newValue as Array<string>).concat(selectedOptions.map(o => o.value));
				(newValue as Array<string>).push(option.value);
			}
			onChange && onChange(newValue);
		}

		writeValue(newValue);
		hide();
	}

	const handleOnChange = (e: any) => {
		const optionsOrigin: Array<ISelectOption> = JSON.parse(JSON.stringify(options));
		const searchText = e.target.value;
		// setValue(e.target.value);
		writeValue(e.target.value);
		const regex = new RegExp(searchText, 'gi');
		const optionsFiltered = optionsOrigin.filter(o => o.label?.match(regex));
		setOptionsTemp(optionsFiltered);
		show();
	}

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>

				<input
					type="text"
					className={getCssClass()}
					id={id}
					name={name}
					tabIndex={0}
					readOnly={readOnly}
					disabled={disabled}
					onChange={handleOnChange}
					value={model}
				/>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{optionsTemp && optionsTemp.map((option, index) =>
									<ListItem id={`list-item-${index}`} key={option.value} onClick={() => handleOnClick(option)} active={isActive(option)}>
										<ListItemText primary={option.label ? option.label : option.value} />
									</ListItem>
								)}
							</List>
						</div>
						<Backdrop isTransparent onClick={() => hide()} />
					</>
				}

			</div>
		</>
	)
}
