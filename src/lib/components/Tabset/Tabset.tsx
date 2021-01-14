import React, { cloneElement, useEffect, useState } from 'react';
import { ITabProps } from './Tab';
import { TabModel, TabNavModel } from './tab.models';
import { TabNav } from './TabNav';

export interface ITabsetProps {
	children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
	className?: string;
	onTabSelect?: (eventKey: string) => void;
	selectedEventKey?: string;
}

export const Tabset = ({ children, className, onTabSelect, selectedEventKey }: ITabsetProps) => {
	const [navs, setNavs] = useState<Array<TabNavModel>>(null);
	const [tabs, setTabs] = useState<Array<TabModel>>(null);
	const [selectedTabKey, setSelectedTabKey] = useState<string>(null);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push("nav nav-tabs tabset");
		cssClasses.push(className);
		return cssClasses.join(' ');
	};

	useEffect(() => {
		if (children) {
			if (Array.isArray(children)) {
				setTabs(children.map(child => new TabModel(child)));
				setNavs(children.map(child => new TabNavModel(child)));
			} else {
				setTabs([new TabModel(children)]);
				setNavs([new TabNavModel(children)]);
			}
		}
	}, [children]);

	useEffect(() => {
		if (tabs && tabs.length > 0) {
			const activeTab = tabs.find(tab => tab.props.eventKey === selectedEventKey);
			if (activeTab) {
				setSelectedTabKey(activeTab.props.eventKey);
			} else {
				setSelectedTabKey(tabs[0].props.eventKey);
			}
		}
	}, [tabs]);

	const handleClickTab = (eventKey: string) => {
		setSelectedTabKey(eventKey);
		onTabSelect && onTabSelect(eventKey);
	}

	return (
		navs && tabs &&
		<>
			<ul className={getCssClasses()}>

				{navs.map(nav => (
					<TabNav
						key={nav.eventKey}
						eventKey={nav.eventKey}
						isActive={nav.eventKey === selectedTabKey}
						disabled={nav.disabled}
						onClick={(eventKey) => handleClickTab(eventKey)}
					>
						{nav.title}
					</TabNav>
				))}

			</ul>


			<div className="tab-content">

				{tabs.map((tab) => (
					cloneElement(tab, {
						isActive: tab.props.eventKey === selectedTabKey,
						key: tab.props.eventKey
					})
				))}

			</div>
		</>
	)
}
