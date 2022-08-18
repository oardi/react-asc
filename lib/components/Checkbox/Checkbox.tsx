import React, { useEffect, useRef, useState } from 'react';
import { CheckSquareRegularIcon, SquareRegularIcon } from '../../icons';
import { IconButton } from '../IconButton';
import styles from './Checkbox.module.scss';

// TODO refactor htmlBasaeProps
export interface ICheckboxProps extends React.ComponentProps<'input'> {
	label?: string;
	value?: string;
	onKeyDown?: (event: React.KeyboardEvent) => void;
}

export const Checkbox = (props: ICheckboxProps): JSX.Element => {

	const { id, checked, className, label, name, value = 'off', disabled, readOnly, ...rest } = props;

	// TODO
	// add own value
	// set from outer
	// update on change
	// emit to outer
	// can be: true/false, custom

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const checkboxElement: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (checked === true || checked === false) {
			setIsChecked(checked);
		}
	}, [checked]);

	const icons: { default: React.ReactElement, selected: React.ReactElement } = {
		default: <SquareRegularIcon />,
		selected: <CheckSquareRegularIcon />
	};

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push('checkbox');
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const getCssClassesLabel = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.checkboxLabel);
		disabled && cssClasses.push(styles['disabled']);
		return cssClasses.filter(css => css).join(' ');
	};

	const getIcon = (): JSX.Element => {
		return isChecked ? icons.selected : icons.default;
	};

	const handleClick = (): void => {
		if (!disabled && !readOnly) {
			setIsChecked(!isChecked);
			checkboxElement?.current?.click();
		}
	};

	return (
		<div className={styles.checkboxContainer}>

			<IconButton
				className={getCssClasses()}
				onClick={handleClick}
				icon={getIcon()}
				disabled={disabled || readOnly}
			/>

			<label onClick={handleClick} className={getCssClassesLabel()}>
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
};
