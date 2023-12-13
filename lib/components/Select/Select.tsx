import type { ReactElement } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../../enums';
import { ChevronDownSolidIcon } from '../../icons';
import { Backdrop } from '../Backdrop';
import { Checkbox } from '../Checkbox';
import { Chip } from '../Chip';
import { Icon } from '../Icon';
import { List, ListItem, ListItemText } from '../List';
import { Portal } from '../Portal';
import type { ISelectOption } from '../component.interfaces';
import styles from './Select.module.scss';

// TODO
// navigate by keys
// on key down
// option als component auslagern?
// custom template render items

export interface ISelectProps {
	id?: string;
	name?: string;
	className?: string;
	options?: ISelectOption[];
	value?: string | string[];
	multiple?: boolean;
	multipleMaxCountItems?: number;
	disabled?: boolean;
	readOnly?: boolean;
	onChange?: (val: string | string[]) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Select = (props: ISelectProps): JSX.Element => {
	const { id, className, options = [], value, multiple, multipleMaxCountItems = 5, disabled, readOnly, onChange, onKeyDown } = props;

	const [model, setModel] = useState<string | string[]>('');
	const [hoverIndex, setHoverIndex] = useState<number | null>(null);
	const [isShow, setIsShow] = useState<boolean>(false);
	const [selectedOptions, setSelectedOptions] = useState<ISelectOption[]>([]);
	const selectConainter: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const selectMenu: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const getCssClass = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		disabled && cssClasses.push(styles['disabled']);
		readOnly && cssClasses.push(styles['readOnly']);
		cssClasses.push(styles.select);
		return cssClasses.filter(r => r).join(' ');
	};

	useEffect(() => {
		const newValue: string | string[] = value ? value : '';
		writeValue(newValue);
		if (newValue) {
			const option: ISelectOption | undefined = options.find(o => o.value === newValue);
			if (option) {
				setHoverIndex(options.indexOf(option));
			}
		}
	}, [value, options]);

	useEffect(() => {
		if (hoverIndex) {
			setTimeout(() => {
				scrollIntoView(hoverIndex);
			}, 100);
		}
	}, [hoverIndex, isShow]);

	const scrollIntoView = (index: number): void => {
		const htmlListItem: Element | null | undefined = selectMenu.current?.children[0]?.querySelector(`#list-item-${index}`);
		if (htmlListItem) {
			htmlListItem?.scrollIntoView({ block: 'center', behavior: 'smooth' });
		}
	};

	const writeValue = (val: string | string[]): void => setModel(val);

	useEffect(() => {
		if (!multiple) {
			const newOption: ISelectOption | undefined = options.find(o => o.value === model);
			if (newOption) {
				setSelectedOptions([newOption]);
			}
		} else {
			const filteredOptions: ISelectOption[] = options.filter(o => model.indexOf(o.value) >= 0);
			setSelectedOptions([...filteredOptions]);
		}
	}, [model, multiple]);

	const handleOnClick = (option: ISelectOption): void => {
		let newValue: string | string[] = multiple ? [] : '';

		if (!multiple) {
			if (model !== option.value) {
				newValue = option.value;
				onChange && onChange(newValue);
			}
			hide();
		} else {
			const selectedOption: ISelectOption | undefined = selectedOptions.find(o => o.value === option.value);
			if (selectedOption) {
				newValue = selectedOptions.filter(o => o.value !== option.value).map(o => o.value);
			} else {
				newValue = (newValue as string[]).concat(selectedOptions.map(o => o.value));
				(newValue as string[]).push(option.value);
			}
			onChange && onChange(newValue);
		}

		writeValue(newValue);
	};

	const show = (): void => {
		if (!disabled && !readOnly) {
			setIsShow(true);
		}
	};
	const hide = (): void => setIsShow(false);
	const isActive = (option: ISelectOption): boolean => {
		return selectedOptions.indexOf(option) >= 0 || hoverIndex === options.indexOf(option);
	};

	const renderSingleViewModel = (): unknown | null => {
		let result: unknown | null = null;
		if (selectedOptions.length > 0) {
			result = <span>{selectedOptions[0].label}</span>;
		}
		return result;
	};

	const renderMultipleViewModel = (): ReactElement | ReactElement[] | null => {
		let result: ReactElement | ReactElement[] | null = null;
		if (selectedOptions.length <= multipleMaxCountItems && selectedOptions.length > 0) {
			result = selectedOptions.map(option => (
				<Chip key={option.value} color={Color.primary} isDeletable={true} onDelete={(e): void => handleOnDelete(e, option)}>
					{option.label}
				</Chip>
			));
		} else {
			result = <span>{selectedOptions.length} Items selected</span>;
		}
		return result;
	};

	const handleOnDelete = (event: React.MouseEvent, option: ISelectOption): void => {
		event.stopPropagation();
		handleOnClick(option);
	};

	// TODO - extract with wrapper?
	const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
		if (isShow) {
			onKeyDown && onKeyDown(e);

			switch (e.code) {
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
						const option: ISelectOption = options[hoverIndex];
						if (option) {
							handleOnClick(option);
						}
					}
					break;
				default:
					break;
			}
		}
	};

	return (
		<div ref={selectConainter} className={styles.selectContainer}>
			<div id={id} className={getCssClass()} onClick={(): void => show()} tabIndex={0} onKeyDown={(e): void => handleOnKeyDown(e)}>
				<>
					{!multiple && renderSingleViewModel()}

					{multiple && <div className={styles.chipContainer}>{renderMultipleViewModel()}</div>}

					<Icon className="ml-auto">
						<ChevronDownSolidIcon />
					</Icon>
				</>
			</div>

			{isShow && (
				<Portal className="backdrop-root">
					<div
						ref={selectMenu}
						className={styles.selectMenu}
						style={{
							left: selectConainter.current?.getBoundingClientRect().x,
							top: selectConainter.current?.getBoundingClientRect().y,
							width: selectConainter.current?.getBoundingClientRect().width,
						}}>
						<List>
							{options &&
								options.map((option, index) => (
									<ListItem
										id={`list-item-${index}`}
										key={option.value}
										onClick={(): void => handleOnClick(option)}
										active={isActive(option)}>
										{multiple && <Checkbox checked={isActive(option)} onChange={(): void => handleOnClick(option)} />}

										<ListItemText primary={option.label ? option.label : option.value} />
									</ListItem>
								))}
						</List>
					</div>
					<Backdrop style={{ zIndex: 1111 }} isTransparent onClick={(): void => hide()} />
				</Portal>
			)}
		</div>
	);
};
