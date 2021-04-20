import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { List, ListItem, ListItemText } from '../List';
import styles from './Select.module.scss';

// TODO
// get value as mutiple?
// navigate by keys

export interface ISelectOption {
	value: string;
	label?: string;
}

export interface ISelectProps {
	id?: string;
	name?: string;
	className?: string;
	options?: Array<ISelectOption>;
	value?: any;
	multiple?: boolean;
	disabled?: boolean;

	getValueAsObject?: boolean;
	onChange?: (val: string | ISelectOption) => void;
}

export const Select = (props: ISelectProps) => {

	const [model, setModel] = useState<string>('');
	const [viewModel, setViewModel] = useState<string>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const selectConainter = useRef<HTMLDivElement>(null);

	const { id, className, options, value, getValueAsObject, onChange } = props;

	useEffect(() => {
		writeValue(value);
	}, [value]);

	const writeValue = (val: any) => {
		setModel(val);
		const option = options?.find(o => o.value === val);
		if (option)
			setViewModel(option.label as string);
	}

	const getCssClass = () => {
		const result = [];
		result.push(className);
		result.push(styles.select);
		return result.filter(r => r).join(' ');
	}

	const handleOnClick = (option: ISelectOption) => {
		if (option.value !== model) {
			writeValue(option.value);

			// if single
			if (onChange) {
				if (getValueAsObject) {
					onChange(option);
				} else {
					onChange(option.value);
				}
			}

			// if multiple
			// TODO
		}
		hide();
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

	return (
		<>
			<div ref={selectConainter} className={styles.selectContainer}>

				<div id={id} className={getCssClass()} onFocus={show} tabIndex={0} onKeyDown={e => handleOnKeyDown(e as any)}>
					{viewModel}
				</div>

				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{options && options.map((option) =>
									<ListItem key={option.value} onClick={() => handleOnClick(option)} active={option.value === model}>
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
