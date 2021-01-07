import React, { useEffect, useRef, useState } from 'react';
import { checkSquareRegularSvg, squareRegularSvg } from '../../assets/icons';
import { HtmlBaseProps } from '../component.interfaces';
import { IconButton } from '../IconButton';

export interface ICheckboxProps extends HtmlBaseProps {
	checked?: boolean;
	label?: string;
	value?: string;
	onChange?: (val: React.FocusEvent<HTMLInputElement>) => void;
	onKeyDown?: (event) => void;
}

const CLASSNAME = 'Checkbox';
export const Checkbox = (props: ICheckboxProps) => {

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const checkboxElement = useRef<HTMLInputElement>();

	useEffect(() => {
		if(props.checked === true || props.checked === false){
			setIsChecked(props.checked)
		}
	}, [props.checked]);

	const icons = {
		default: squareRegularSvg,
		selected: checkSquareRegularSvg
	};

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('checkbox');
		cssClasses.push(props.className);
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
		props.onChange && props.onChange(e);
	}

	return (
		<div className="checkbox-container">

			<IconButton className={getCssClasses()} onClick={handleClick} icon={getIcon()} />

			<label onClick={handleClick}>{props.label}</label>

			<input
				type="checkbox"
				ref={checkboxElement}
				id={props.id}
				name={props.name}
				onChange={handleChange}
				checked={isChecked}
				hidden={true}
				value={props.value}
				onKeyDown={props.onKeyDown}
			/>
		</div>
	);
}
