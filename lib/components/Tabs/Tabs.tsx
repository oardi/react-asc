import React, { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react';
import { ButtonContext } from '../Button';
import { COLOR } from '../component.enums';
import { ITabProps } from './Tab';
import { ITabsContext, TabContext } from './TabContext';
import { TabIndicator } from './TabIndicator';
import styles from './Tabs.module.scss';

export interface ITabsProps {
	color?: COLOR;
	indicatorColor?: COLOR;
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fixed?: boolean;
	onChange?: (value: string) => void;
	value?: string;
}

export const Tabs = (props: ITabsProps) => {

	const { children, className, fixed = false, color, indicatorColor = COLOR.accent, value, onChange } = props;

	const [selectedValue, setSelectedValue] = useState<string>('');
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const tabContext: ITabsContext = ({
		selectedValue,
		setSelectedValue,
		fixed
	});

	const prevSelectedValueRef: React.MutableRefObject<string | undefined> = useRef<string>();
	useEffect(() => {
		// TODO - check if prev needs to be set
		if (value !== undefined && value !== prevSelectedValueRef.current) {
			setSelectedValue(value);
		}
	}, [value]);

	useEffect(() => {
		React.Children.toArray(children).forEach((child, index) => {
			if ((child as ReactElement<PropsWithChildren<ITabProps>>).props.value === selectedValue) {
				setSelectedIndex(index);
				onChange && onChange(selectedValue);
			}
		})
	}, [children, selectedValue]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.tabs);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<ButtonContext.Provider value={{ color: color || COLOR.light }}>
			<TabContext.Provider value={tabContext}>
				<div className={getCssClasses()}>
					{children}

					{children &&
						<TabIndicator
							color={indicatorColor}
							width={(100 / React.Children.toArray(children).length) + '%'}
							index={selectedIndex}
							amount={React.Children.toArray(children).length}
						/>
					}
				</div>
			</TabContext.Provider>
		</ButtonContext.Provider>
	)
}
