import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { Checkbox } from '../Checkbox';
import { List, ListItem, ListItemText } from '../List';
import styles from './Select.module.scss';

// TODO
// navigate by keys
// on key down enter
// viewModel

export interface ISelectOption {
	value: string;
	label?: string;
}

export interface ISelectProps {
	id?: string;
	name?: string;
	className?: string;
	options: Array<ISelectOption>;
	value?: string | Array<string>;
	multiple?: boolean;
	disabled?: boolean;
	onChange?: (val: string | Array<string>) => void;
}

export const Select = (props: ISelectProps) => {

	const { id, className, options, value, multiple, onChange } = props;

	const [model, setModel] = useState<string | Array<string>>('');
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
		console.warn('value changed');
		const newValue = !!value ? value : '';
		writeValue(newValue);
	}, [value]);

	const writeValue = (val: string | Array<string>) => {
		console.warn('writeValue', JSON.stringify(val));
		setModel(val);
	}

	useEffect(() => {
		console.warn('model changed', model);
		if (!multiple) {
			const newOption = options.find(o => o.value === model);
			if (newOption) {
				setSelectedOptions([newOption]);
			}
		} else {
			// TODO
			// setSelectedOption
		}
	}, [model]);

	const handleOnClick = (option: ISelectOption) => {
		console.warn('handleOnClick');

		let newValue;

		if (!multiple) {
			if (newValue !== option.value) {
				newValue = option.value;
				onChange && onChange(newValue);
			}
			hide();
		} else {

			newValue = [];

			// TODO
			// const selectedOption = selectedOptions.find(o => o.value === option.value);
			// let newSelectedOptions = [];
			// if (selectedOption) {
			// 	newSelectedOptions = selectedOptions.filter(o => o.value !== option.value);
			// } else {
			// 	newSelectedOptions.push(option);
			// }
			// setSelectedOptions(newSelectedOptions);

			// newValue = selectedOptions.map(o => o.value);

			// onChange && onChange(newValue);
		}

		writeValue(newValue);
	}

	// TODO
	const handleOnKeyDown = (e: KeyboardEventHandler<HTMLDivElement>) => {
		if ((e as any).key === 'Enter') {
			console.warn('EEENTER');
		}
	}

	const show = () => setIsShow(true);
	const hide = () => setIsShow(false);
	const isActive = (option: ISelectOption) => selectedOptions.indexOf(option) >= 0;

	const renderSingleViewModel = () => {
		let result = null;
		if (selectedOptions.length > 0) {
			result = <span>{selectedOptions[0].label}</span>;
		}
		return result;
	}

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>

				<div id={id} className={getCssClass()} onClick={() => show()} tabIndex={0} onKeyDown={e => handleOnKeyDown(e as any)}>

					{!multiple && renderSingleViewModel()}

					{/* {!multiple && viewModel}

					{multiple &&
						selectedOptions
							.map(o =>
								<Chip color={COLOR.primary} key={o.value} className="mr-2" onDelete={(e) => handleOnDelete((e as any), o)}>
									{o.label}
								</Chip>
							)
					} */}
				</div>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{options && options.map((option) =>
									<ListItem key={option.value} onClick={() => handleOnClick(option)} active={isActive(option)}>

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
						<Backdrop target={selectConainter.current as HTMLElement} isTransparent onClick={() => hide()} />
					</>
				}

			</div>
		</>
	);
}
