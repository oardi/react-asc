import React, { useEffect, useRef, useState } from 'react';
import { IconButton } from '..';
import { TimesSolidIcon, useDebounce } from '../..';
import { Backdrop } from '../Backdrop';
import { ISelectOption } from '../component.interfaces';
import { List, ListItem, ListItemText } from '../List';
import styles from './AutoComplete.module.scss';

export interface IAutoCompleteProps {
	id?: string;
	name?: string;
	className?: string;
	options?: Array<ISelectOption>;
	value?: string;
	openOnFocus?: boolean;
	disabled?: boolean;
	placeholder?: string;
	readOnly?: boolean;
	debounce?: number;
	showClearButton?: boolean;
	onSelect?: (val: ISelectOption) => void;
	onChange?: (val: string | undefined) => void;
	onKeyDown?: (event: any) => void;
}

// preset value
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
		openOnFocus = true,
		disabled,
		readOnly,
		debounce = 0,
		placeholder,
		showClearButton,
		onChange,
		onSelect,
		value
	} = props;

	const [model, setModel] = useState<string | undefined>('');
	const [searchText, setSearchText] = useState<string | undefined>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const [optionsTemp, setOptionsTemp] = useState<Array<ISelectOption>>([]);
	const selectConainter = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (value !== model) {
			const option = options.find(o => o.value === value);
			setModel(option ? option.label : '');
		}
	}, [value]);

	useEffect(() => {
		if (options && options.length > 0) {
			const optionsOrigin: Array<ISelectOption> = JSON.parse(JSON.stringify(options));
			const regex = new RegExp((searchText as string).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
			const optionsFiltered = optionsOrigin.filter(o => o.label?.match(regex));
			setOptionsTemp(optionsFiltered);
		}
	}, [options]);

	useDebounce(
		() => { onChange && onChange(searchText); },
		debounce,
		[searchText]
	);

	const getCssClass = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		cssClasses.push(styles.select);
		return cssClasses.filter(r => r).join(' ');
	}

	const show = () => setIsShow(true);
	const hide = () => setIsShow(false);

	const handleOnClick = (option: ISelectOption) => {
		if (model !== option.value) {
			onSelect && onSelect(option);
		}
		setModel(option.label as string);
		hide();
	}

	const handleOnChange = (e: any) => {
		setModel(e.target.value);
		setSearchText(e.target.value);
		show();
	}

	const handleOnFocus = () => {
		openOnFocus && show();
	}

	const handleClickReset = () => {
		setModel('');
		setSearchText('');
	}

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>
				<div className="d-flex">

					<input
						type="text"
						className={getCssClass()}
						id={id}
						name={name}
						tabIndex={0}
						readOnly={readOnly}
						disabled={disabled}
						onChange={handleOnChange}
						onFocus={handleOnFocus}
						placeholder={placeholder}
						value={model}
					/>

					{showClearButton && (model?.length as number) > 0 &&
						<IconButton
							icon={<TimesSolidIcon />}
							onClick={handleClickReset}
						/>}
				</div>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{optionsTemp && optionsTemp.map((option, index) =>
									<ListItem
										id={`list-item-${index}`}
										key={option.value}
										onClick={() => handleOnClick(option)}
									>
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
