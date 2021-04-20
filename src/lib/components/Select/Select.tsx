import React, { useEffect, useRef, useState } from 'react';
import { Backdrop } from '../Backdrop';
import { List, ListItem, ListItemText } from '../List';
import styles from './Select.module.scss';

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

	onChange?: (val: Event) => void;
}

export const Select = (props: ISelectProps) => {

	const [model, setModel] = useState<string>('');
	const [viewModel, setViewModel] = useState<string>('');
	const [isShow, setIsShow] = useState<boolean>(false);
	const selectConainter = useRef<HTMLDivElement>(null);

	const { id, name, className, options, value } = props;

	useEffect(() => {
		console.warn('value changed', value);
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

	const handleOnChange = (e: any) => {
		console.warn(e);
		writeValue(e.target.value);
	}

	const handleOnClick = (option: ISelectOption) => {
		console.warn('option', option);

		// if single
		writeValue(option.value);
		hide();

		// if multiple
		// TODO
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
				<div
					id={id}
					className={getCssClass()}
					onFocus={show}
					tabIndex={0}
				>
					{viewModel}
				</div>
				{isShow &&
					<>
						<div className={styles.selectMenu}>
							<List>
								{options && options.map((option) =>
									<ListItem key={option.value} onClick={() => handleOnClick(option)}>
										<ListItemText primary={option.label ? option.label : option.value} />
									</ListItem>
								)}
							</List>
						</div>
						<Backdrop target={selectConainter.current as HTMLElement} isTransparent onClick={() => hide()} />
					</>
				}
			</div>

			{/* <select
				id={id}
				name={name}
				className={getCssClass()}
				onChange={handleOnChange}
			>
				{options && options.map((option) =>
					<option key={option.value} value={option.value}>
						{option.label ? option.label : option.value}
					</option>
				)}
			</select> */}
		</>
	);
}
