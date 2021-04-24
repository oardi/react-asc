import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { Checkbox } from '../Checkbox';
import { Chip } from '../Chip';
import { COLOR } from '../component.enums';
import { List, ListItem, ListItemText } from '../List';
import styles from './Select.module.scss';

// TODO
// get value as mutiple?
// navigate by keys
// on key down enter

export interface ISelectOption {
	value: string;
	label?: string;
	isActive?: boolean;
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

	const [model, setModel] = useState<string | Array<string>>('');
	const [optionList, setOptionList] = useState<Array<ISelectOption>>([]);
	const [viewModel, setViewModel] = useState<string | Array<string>>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const selectConainter = useRef<HTMLDivElement>(null);

	const { id, className, options, value, multiple, onChange } = props;

	useEffect(() => {
		if (!!value) writeValue(value);
	}, [value]);

	useEffect(() => {
		const newOptions = options.map(o => { o.isActive = multiple ? (value as Array<string>).indexOf(o.value) >= 0 : o.value === value; return o });
		setOptionList(newOptions);
	}, [options]);

	const writeValue = (val: string | Array<string>) => {
		setModel(val);

		if (!multiple) {
			const option = options?.find(o => o.value === val);
			if (option)
				setViewModel(option.label as string);
		} else {
			setViewModel(val);
		}
	}

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.select);
		return result.filter(r => r).join(' ');
	}

	const handleOnClick = (option: ISelectOption) => {
		if (!multiple) {

			if (option.value !== model) {

				const newOptions = options.map(o => { o.isActive = false; return o });
				setOptionList(newOptions);

				writeValue(option.value);

				if (onChange) {
					onChange(option.value);
				}
			}

			hide();
		} else {
			const newOptions = options;
			const updatedOption = newOptions.find(o => o.value === option.value);
			if (updatedOption) updatedOption.isActive = !updatedOption.isActive;
			setOptionList(newOptions);

			const activeOptions = newOptions.filter(o => o.isActive);
			writeValue(activeOptions.map(o => o.value));

			if (onChange) {
				onChange(activeOptions.map(o => o.value));
			}
		}
	}


	const handleOnKeyDown = (e: KeyboardEventHandler<HTMLDivElement>) => {
		if ((e as any).key === 'Enter') {
			console.warn('EEENTER');
		}
	}

	const show = () => {
		setIsShow(true);
	}

	const hide = () => {
		setIsShow(false);
	}

	const handleOnDelete = (e: Event, option: ISelectOption) => {
		console.warn('handleDELETE');
		e.stopPropagation();
		handleOnClick(option);
	};

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>

				<div id={id} className={getCssClass()} onClick={() => show()} tabIndex={0} onKeyDown={e => handleOnKeyDown(e as any)}>
					{!multiple && viewModel}

					{/* refactor! */}
					{multiple && optionList.length > 0 &&
						optionList
							.filter(o => o.isActive)
							.map(o =>
								<Chip color={COLOR.primary} style={{ zIndex: 1111 }} key={o.value} className="mr-2" onDelete={(e) => handleOnDelete((e as any), o)}>
									{o.label}
								</Chip>
							)
					}
				</div>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{optionList && optionList.map((option) =>
									<ListItem key={option.value} onClick={() => handleOnClick(option)} active={option.isActive}>

										{multiple &&
											<Checkbox
												checked={option.isActive}
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
