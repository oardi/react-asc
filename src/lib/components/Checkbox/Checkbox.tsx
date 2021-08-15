import React, { useEffect, useRef, useState } from 'react';
import { CheckSquareRegularIcon, SquareRegularIcon } from '../../assets/icons';
import { HtmlBaseProps } from '../component.interfaces';
import { IconButton } from '../IconButton';
import styles from './Checkbox.module.scss';

// TODO refactor htmlBasaeProps
export interface ICheckboxProps extends HtmlBaseProps {
	id?: string;
	name?: string;
	className?: string;
	checked?: boolean;
	label?: string;
	value?: string;
	onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent) => void;
}

export const Checkbox = (props: ICheckboxProps) => {

	const { id, checked, className = '', label, name, value = "off", disabled, readOnly, ...rest } = props;

	// TODO
	// add own value
	// set from outer
	// update on change
	// emit to outer
	// can be: true/false, custom

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const checkboxElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (checked === true || checked === false) {
			setIsChecked(checked);
		}
	}, [checked]);

	const icons = {
		default: <SquareRegularIcon />,
		selected: <CheckSquareRegularIcon />
	};

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('checkbox');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const getIcon = () => {
		return isChecked ? icons.selected : icons.default;
	};

	const handleClick = () => {
		setIsChecked(!isChecked);
		checkboxElement?.current?.click();
	};

	return (
		<div className={styles.checkboxContainer}>

			<IconButton
				className={getCssClasses()}
				onClick={handleClick}
				icon={getIcon()}
				disabled={disabled || readOnly}
			/>

			<label onClick={handleClick} className={styles.checkboxLabel + ' ' + (disabled ? styles['disabled'] : undefined)}>
				{label}
			</label>

			<input
				type="checkbox"
				ref={checkboxElement}
				id={id}
				name={name}
				checked={isChecked}
				disabled={disabled}
				readOnly={readOnly}
				hidden={true}
				value={value}
				{...rest}
			/>
		</div>
	);
}
