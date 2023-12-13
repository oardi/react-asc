import type { PropsWithChildren, ReactElement } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { Color } from '../../enums';
import { ButtonContext } from '../Button';
import type { ITabProps } from './Tab';
import type { ITabsContext } from './TabContext';
import { TabContext } from './TabContext';
import { TabIndicator } from './TabIndicator';
import styles from './Tabs.module.scss';

export interface ITabsProps {
	color?: Color;
	indicatorColor?: Color;
	children?: ReactElement<ITabProps> | ReactElement<ITabProps>[];
	className?: string;
	fixed?: boolean;
	onChange?: (value: string) => void;
	value?: string;
}

export const Tabs = (props: ITabsProps): JSX.Element => {
	const { children, className, fixed = false, color, indicatorColor = Color.accent, value, onChange } = props;

	const [selectedValue, setSelectedValue] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const tabContext: ITabsContext = {
		selectedValue: selectedValue,
		setSelectedValue: setSelectedValue,
		fixed: fixed,
	};

	const prevSelectedValueRef: React.MutableRefObject<string | undefined> = useRef<string>();
	useEffect(() => {
		if (value !== undefined && value !== prevSelectedValueRef.current) {
			prevSelectedValueRef.current = value;
			setSelectedValue(value as string);
		}
	}, [value]);

	useEffect(() => {
		if (selectedValue && children) {
			React.Children.toArray(children).forEach((child, index) => {
				if ((child as ReactElement<PropsWithChildren<ITabProps>>).props.value === selectedValue) {
					setSelectedIndex(index);
					onChange && onChange(selectedValue);
				}
			});
		}
	}, [selectedValue]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.tabs);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ButtonContext.Provider value={{ color: color || Color.light }}>
			<TabContext.Provider value={tabContext}>
				<div className={getCssClasses()}>
					{children}

					{children && (
						<TabIndicator
							color={indicatorColor}
							width={100 / React.Children.toArray(children).length + '%'}
							index={selectedIndex}
							amount={React.Children.toArray(children).length}
						/>
					)}
				</div>
			</TabContext.Provider>
		</ButtonContext.Provider>
	);
};
