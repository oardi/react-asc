import React, { cloneElement, Fragment, PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { ITabProps } from './Tab';
import { TabNavModel } from './tab.models';

export interface ITabsProps {
	children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
	className?: string;
	fill?: boolean;
	onChange?: (event: any, newValue: string) => void;
	selectedEventKey?: string;
}

export const Tabs = (props: ITabsProps) => {

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
			<div className={getCssClasses()}>
				{
					children &&
					Array.isArray(children) &&
					children.map(child => {
						const item = child as ReactElement<PropsWithChildren<ITabProps>>;

						return cloneElement(item, {
							isActive: item.props.value === _selectedEventKey,
							onClick: handleClickTab,
							key: item.props.value,
						});
					})
				}

				{
					children &&
					!Array.isArray(children) &&
					cloneElement((children as any), {
						isActive: (children.props as ITabProps).value === _selectedEventKey,
						onClick: handleClickTab
					})
				}
			</div>
		</Fragment>
	)
}
