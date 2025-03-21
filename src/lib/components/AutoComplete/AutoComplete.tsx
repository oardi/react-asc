import React, { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks';
import { TimesSolidIcon } from '../../icons';
import { Backdrop } from '../Backdrop';
import type { ISelectOption } from '../component.interfaces';
import { IconButton } from '../IconButton';
import { List, ListItem, ListItemText } from '../List';
import styles from './AutoComplete.module.scss';

export interface IAutoCompleteProps {
	id?: string;
	name?: string;
	className?: string;
	options?: ISelectOption[];
	value?: string;
	openOnFocus?: boolean;
	disabled?: boolean;
	placeholder?: string;
	readOnly?: boolean;
	debounce?: number;
	showClearButton?: boolean;
	onSelect?: (val: ISelectOption) => void;
	onChange?: (val: string | undefined) => void;
	// onKeyDown?: (event: any) => void;
}

// preset value
// enter -> delay? -> show results
// single
// multiple
// custom template render items

export const AutoComplete = (props: IAutoCompleteProps): React.JSX.Element => {
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
		value,
	} = props;

	const [model, setModel] = useState<string | undefined>('');
	const [searchText, setSearchText] = useState<string | undefined>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const [_options, setOptions] = useState<ISelectOption[]>([]);
	const selectConainter: React.RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (value !== model) {
			const option: ISelectOption | undefined = options.find(o => o.value === value);
			setModel(option ? (option.label as string) : '');
		}
	}, [value]);

	useEffect(() => {
		setOptions(options);
	}, [options]);

	useDebounce(
		() => {
			onChange && onChange(searchText);
		},
		debounce,
		[searchText]
	);

	useEffect(() => {
		if (isShow === true) {
			document.body.classList.add('modal-open');
			const main: Element | null = document.querySelector('.main');
			main?.classList.add('modal-open');
		} else {
			document.body.classList.remove('modal-open');
			const main: Element | null = document.querySelector('.main');
			main?.classList.remove('modal-open');
		}
	}, [isShow]);

	useEffect(() => {
		return (): void => {
			document.body.classList.remove('modal-open');
			const main: Element | null = document.querySelector('.main');
			main?.classList.remove('modal-open');
		};
	}, []);

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		cssClasses.push(styles.select);
		return cssClasses.filter(r => r).join(' ');
	};

	const show = (): void => setIsShow(true);
	const hide = (): void => setIsShow(false);

	const handleOnClick = (option: ISelectOption): void => {
		if (model !== option.value) {
			onSelect && onSelect(option);
		}
		setModel(option.label as string);
		hide();
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setModel(e.target.value);
		setSearchText(e.target.value);
		show();
	};

	const handleOnFocus = (): void => {
		openOnFocus && show();
	};

	const handleClickReset = (): void => {
		setModel('');
		setSearchText('');
	};

	return (
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

				{showClearButton && (model?.length as number) > 0 && <IconButton icon={<TimesSolidIcon />} onClick={handleClickReset} />}
			</div>

			{isShow && (
				<>
					<div className={styles.selectMenu}>
						<List>
							{_options &&
								_options.map((option, index) => (
									<ListItem
										id={`list-item-${index}`}
										key={option.value}
										onClick={(): void => handleOnClick(option)}
										disabled={!option.value}>
										<ListItemText primary={option.label ? option.label : option.value} />
									</ListItem>
								))}
						</List>
					</div>
					<Backdrop isTransparent onClick={(): void => hide()} />
				</>
			)}
		</div>
	);
};
