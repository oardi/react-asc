import React, { useEffect, useRef, useState } from 'react';
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
	readOnly?: boolean;
	onChange?: (val: string) => void;
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
		onChange,
		value
	} = props;

	const [model, setModel] = useState<string | undefined>('');
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
		const optionsOrigin: Array<ISelectOption> = JSON.parse(JSON.stringify(options));
		setOptionsTemp(optionsOrigin);
	}, [options]);

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
			onChange && onChange(option.value);
		}
		setModel(option.label as string);
		hide();
	}

	const handleOnChange = (e: any) => {
		const optionsOrigin: Array<ISelectOption> = JSON.parse(JSON.stringify(options));
		const searchText = e.target.value;
		setModel(searchText);
		const regex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'gi');
		const optionsFiltered = optionsOrigin.filter(o => o.label?.match(regex));
		setOptionsTemp(optionsFiltered);
		show();
	}

	const handleOnFocus = () => {
		openOnFocus && show();
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
					onFocus={handleOnFocus}
					value={model}
				/>

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
