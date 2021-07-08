import React, { cloneElement, Fragment, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { COLOR } from '../component.enums';
import { ITabProps } from './Tab';
import { TabNavModel } from './tab.models';
import styles from './Tabs.module.scss';

export interface ITabsProps {
	color?: COLOR;
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fixed?: boolean;
	onChange?: (event: any, newValue: string) => void;
	selectedEventKey?: string;
}

export const Tabs = (props: ITabsProps) => {

	const { children, className = '', fixed, onChange, selectedEventKey } = props;

	const [_selectedEventKey, setSelectedEventKey] = useState(selectedEventKey);
	const [navs, setNavs] = useState<Array<TabNavModel>>([]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.tabs);
		cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	useEffect(() => {
		if (children) {
			if (Array.isArray(children)) {
				setNavs(children.map(child => new TabNavModel(child)));
			} else {
				setNavs([new TabNavModel(children)]);
			}
		}
	}, [children]);

	const handleClickTab = (event: any, newValue: string) => {
		setSelectedEventKey(newValue);
		onChange && onChange(event, newValue);
	}

	const renderTabs = (child: ReactElement<PropsWithChildren<ITabProps>>) => {
		return cloneElement(child, {
			key: child.props.value,
			isActive: child.props.value === _selectedEventKey,
			fixed: fixed,
			onClick: handleClickTab,
		});
	}

	return (
		navs &&
		<Fragment>
			<div className={getCssClasses()}>
				{children && Array.isArray(children) && children.map(child => renderTabs(child))}

				{children && !Array.isArray(children) && renderTabs(children)}
			</div>
		</Fragment>
	)
}
