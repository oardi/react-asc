import React, { cloneElement, useEffect, useState } from 'react';
import { ITabProps } from './Tab';

export interface ITabsetProps {
	children?: React.ReactElement<ITabProps> | Array<React.ReactElement<ITabProps>>;
	className?: string;
	// selectedEventKey // TODO init + onchange
}

export const Tabset = ({ children, className }: ITabsetProps) => {

	const [selectedTabKey, setSelectedTabKey] = useState<string>(null);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push("nav nav-tabs tabset");
		cssClasses.push(className);
		return cssClasses.join(' ');
	};

	useEffect(() => {
		if (children) {
			const activeChild = (children as Array<React.ReactElement<ITabProps>>).find(child => child.props.isActive && !child.props.disabled);
			if (activeChild) {
				setSelectedTabKey(activeChild.props.eventKey);
			}
		}
	}, [children]);

	const handleClickTab = (tab: React.ReactElement<ITabProps>) => {
		console.warn('handleClickTab');
		if (!tab.props.disabled) {
			setSelectedTabKey(tab.props.eventKey.toString());
		}
	}

	return (
		<div>
			<ul className={getCssClasses()}>

				{(children as Array<React.ReactElement<ITabProps>>).map((child) => (

					<li key={child.props.eventKey} className={"nav-item" + (child.props.disabled ? ' disabled' : '')} role="presentation">
						<a
							className={"nav-link" + (child.props.eventKey === selectedTabKey ? ' active' : '') + (child.props.disabled ? ' disabled' : '')}
							onClick={() => handleClickTab(child)}>
							{child.props.title}
						</a>
					</li>

				))}

			</ul>


			<div className="tab-content">

				{(children as Array<React.ReactElement<ITabProps>>).map((child) => (
					cloneElement(child, {
						isActive: child.props.eventKey === selectedTabKey,
						key: child.props.eventKey
					})
				))}

			</div>
		</div>
	)
}
