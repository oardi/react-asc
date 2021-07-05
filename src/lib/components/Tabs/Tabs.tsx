import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { TabNav } from './TabNav';
import { ITabProps } from './Tab';
import { TabNavModel } from './tab.models';

export interface ITabsetProps {
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fill?: boolean;
	onChange?: (event: any, newValue: string) => void;
	selectedEventKey?: string;
}

export const Tabs = (props: ITabsetProps) => {

	const { children, className = '', fill, onChange, selectedEventKey } = props;

	const [_selectedEventKey, setSelectedEventKey] = useState(selectedEventKey);
	const [navs, setNavs] = useState<Array<TabNavModel>>([]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(className);
		if (fill) cssClasses.push('nav-fill');
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

	return (
		navs &&
		<Fragment>
			<ul className={getCssClasses()}>
				{navs.map(nav => (
					<TabNav
						key={nav.eventKey}
						value={nav.eventKey}
						isActive={nav.eventKey === _selectedEventKey}
						disabled={nav.disabled}
						onClick={handleClickTab}
					>
						{nav.title}
					</TabNav>
				))}
			</ul>
		</Fragment>
	)
}
