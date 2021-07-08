import React, { cloneElement, Fragment, PropsWithChildren, ReactChild, ReactElement, useState } from 'react';
import { COLOR } from '../component.enums';
import { ITabProps } from './Tab';
import { TabIndicator } from './TabIndicator';
import styles from './Tabs.module.scss';

export interface ITabsProps {
	color?: COLOR;
	indicatorColor?: COLOR;
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fixed?: boolean;
	onChange?: (event: any, newValue: string) => void;
	selectedEventKey?: string;
}

export const Tabs = (props: ITabsProps) => {

	const { children, className = '', fixed, indicatorColor, onChange, selectedEventKey } = props;
	const [_selectedEventKey, setSelectedEventKey] = useState(selectedEventKey);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.tabs);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickTab = (event: any, newValue: string, index: number) => {
		setSelectedEventKey(newValue);
		setSelectedIndex(index);
		onChange && onChange(event, newValue);
	}

	const renderTabs = (child: ReactChild, index: number) => { //<PropsWithChildren<ITabProps>>
		return React.isValidElement(child) && cloneElement((child as ReactElement<PropsWithChildren<ITabProps>>), {
			key: child.props.value,
			isActive: child.props.value === _selectedEventKey,
			fixed: fixed,
			onClick: (event: any, newValue: string) => handleClickTab(event, newValue, index),
		});
	}

	return (
		<Fragment>
			<div className={getCssClasses()}>
				{children && React.Children.toArray(children).map((child, index) => renderTabs(child as ReactChild, index))}

				{children &&
					<TabIndicator
						color={indicatorColor}
						width={(100 / React.Children.toArray(children).length) + '%'}
						index={selectedIndex}
						amount={React.Children.toArray(children).length}
					/>
				}
			</div>
		</Fragment>
	)
}
