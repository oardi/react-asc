import React, { useEffect, useRef, useState } from 'react';
import { checkSquareRegularSvg, squareRegularSvg } from '../../assets/icons';
import { HtmlBaseProps } from '../component.interfaces';
import { IconButton } from '../IconButton';

export interface ICheckboxProps extends HtmlBaseProps {
	id?: string;
	name?: string;
	className?: string;
	checked?: boolean;
	label?: string;
	value?: string;
	onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event) => void;
}

const CLASSNAME = 'Checkbox';
export const Checkbox = ({ id, checked, className, label, name, value, onChange, onKeyDown }: ICheckboxProps) => {

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const checkboxElement = useRef<HTMLInputElement>();

	useEffect(() => {
		if (checked === true || checked === false) {
			setIsChecked(checked)
		}
	}, [checked]);

	const icons = {
		default: squareRegularSvg,
		selected: checkSquareRegularSvg
	};

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('checkbox');
		cssClasses.push(className);
		return cssClasses.join(' ');
	};

	const getIcon = () => {
		return isChecked ? icons.selected : icons.default;
	};

	const handleClick = () => {
		setIsChecked(!isChecked);
		checkboxElement.current.click();
	};

	const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
		onChange && onChange(e);
	}

	return (
		<div className="checkbox-container">

			<IconButton className={getCssClasses()} onClick={handleClick} icon={getIcon()} />

			<label onClick={handleClick}>
				{label}
			</label>

			<input
				type="checkbox"
				ref={checkboxElement}
				id={id}
				name={name}
				onChange={handleChange}
				checked={isChecked}
				hidden={true}
				value={value}
				onKeyDown={onKeyDown}
			/>
		</div>
	);
}
