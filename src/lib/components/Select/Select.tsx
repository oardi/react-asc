import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { ChevronDownSolidIcon } from '../../assets/icons';
import { Backdrop } from '../Backdrop';
import { Checkbox } from '../Checkbox';
import { Chip } from '../Chip';
import { COLOR } from '../component.enums';
import { List, ListItem, ListItemText } from '../List';
import { Icon } from '../Icon';
import styles from './Select.module.scss';

// TODO
// navigate by keys
// on key down
// option als component auslagern?

export interface ISelectOption {
	value: string;
	label?: string;
}

export interface ISelectProps {
	id?: string;
	name?: string;
	className?: string;
	options?: Array<ISelectOption>;
	value?: string | Array<string>;
	multiple?: boolean;
	multipleMaxCountItems?: number;
	disabled?: boolean;
	onChange?: (val: string | Array<string>) => void;
	onKeyDown?: (event: any) => void;
}

export const Select = (props: ISelectProps) => {

	const { id, className, options = [], value, multiple, multipleMaxCountItems = 5, onChange, onKeyDown } = props;

	const [model, setModel] = useState<string | Array<string>>('');
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [isShow, setIsShow] = useState<boolean>(false);
	const [selectedOptions, setSelectedOptions] = useState<Array<ISelectOption>>([]);
	const selectConainter = useRef<HTMLDivElement>(null);

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.select);
		return result.filter(r => r).join(' ');
	}

	useEffect(() => {
		const newValue = !!value ? value : '';
		writeValue(newValue);
		if (newValue) {
			const option = options.find(o => o.value === newValue);
			if (option) {
				setHoverIndex(options.indexOf(option));
			}
		}
	}, [value]);

	useEffect(() => {
		// check hover index
		const htmlListItem = selectConainter.current?.querySelector(`#list-item-${hoverIndex}`);
		htmlListItem?.scrollIntoView();
	}, [hoverIndex]);

	const writeValue = (val: string | Array<string>) => setModel(val);

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

	const handleOnClick = (option: ISelectOption) => {
		let newValue: string | Array<string> = multiple ? [] : '';

		if (!multiple) {
			if (model !== option.value) {
				newValue = option.value;
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
	}

	const show = () => setIsShow(true);
	const hide = () => setIsShow(false);
	const isActive = (option: ISelectOption) => {
		return selectedOptions.indexOf(option) >= 0 || hoverIndex === options.indexOf(option);
	}

	const renderSingleViewModel = () => {
		let result = null;
		if (selectedOptions.length > 0) {
			result = <span>{selectedOptions[0].label}</span>;
		}
		return result;
	}

	const renderMultipleViewModel = () => {
		let result = null;
		if (selectedOptions.length <= multipleMaxCountItems && selectedOptions.length > 0) {
			result = selectedOptions
				.map(o =>
					<Chip color={COLOR.primary} key={o.value} className="mr-2" onDelete={(e) => handleOnDelete((e as any), o)}>
						{o.label}
					</Chip>
				);
		} else {
			result = <span>{selectedOptions.length} Items selected</span>
		}
		return result;
	}

	const handleOnDelete = (event: Event, option: ISelectOption) => {
		event.stopPropagation();
		handleOnClick(option);
	}

	// TODO
	const handleOnKeyDown = (e: KeyboardEventHandler<HTMLDivElement>) => {
		if (isShow) {
			onKeyDown && onKeyDown(e);

			switch ((e as any).code) {
				case 'Escape':
					hide();
					break;
				case 'ArrowDown':
					if (hoverIndex) {
						setHoverIndex(hoverIndex + 1);
					}
					break;
				case 'ArrowUp':
					// TODO
					if (hoverIndex) {
						setHoverIndex(hoverIndex - 1);
					}
					break;
				case 'Enter':
					if (hoverIndex) {
						const option = options[hoverIndex];
						if (option) handleOnClick(option);
					}
					break;
				default:
					break;
			}
		}
	}

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>

				<div id={id} className={getCssClass()} onClick={() => show()} tabIndex={0} onKeyDown={e => handleOnKeyDown(e as any)}>
					{!multiple && renderSingleViewModel()}
					{multiple && renderMultipleViewModel()}

					<Icon className="ml-auto"><ChevronDownSolidIcon /></Icon>
				</div>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{options && options.map((option, index) =>
									<ListItem id={`list-item-${index}`} key={option.value} onClick={() => handleOnClick(option)} active={isActive(option)}>

										{multiple &&
											<Checkbox
												checked={isActive(option)}
												onChange={() => handleOnClick(option)}
											/>
										}

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
	);
}
