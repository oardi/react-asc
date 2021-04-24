import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { Checkbox } from '../Checkbox';
import { List, ListItem, ListItemText } from '../List';
import styles from './Select.module.scss';

// TODO
// get value as mutiple?
// navigate by keys
// on key down enter

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

	const [model, setModel] = useState<string | Array<string>>('');
	const [viewModel, setViewModel] = useState<string>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const selectConainter = useRef<HTMLDivElement>(null);

	const { id, className, options, value, multiple, getValueAsObject, onChange } = props;

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
		if (!multiple && option.value !== model) {
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
			hide();
		} else {
			console.warn('should be multiple');
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

	const handleChange = () => {
		console.warn('handleChange');
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
										<Checkbox
											checked={option.value === model}
											onChange={handleChange}
										/>
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
