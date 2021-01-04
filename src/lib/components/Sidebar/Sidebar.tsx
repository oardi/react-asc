import React, { useEffect, useState } from "react";
import { SidebarItemModel } from './sidebar.models';

interface ISidebarProps {
	title: string;
	items: Array<SidebarItemModel>;
	currentUrl: string;
	onItemClicked: (path: string) => void;
}

export const Sidebar = ({ title, items, currentUrl, onItemClicked }: ISidebarProps) => {

	const [menuItems, setMenuItems] = useState<Array<SidebarItemModel>>([]);

	useEffect(() => {
		if (items && items.length > 0) {
			initMenuItems();
		}
	}, [items]);

	useEffect(() => { initMenuItems(); }, [currentUrl]);

	const initMenuItems = () => {
		const newItems = items.map(item => new SidebarItemModel(
			item.id,
			item.label,
			item.path,
			item.icon,
			isMenuItemActive(item.path),
			item.items && item.items.map(subItem => new SidebarItemModel(
				subItem.id,
				subItem.label,
				subItem.path,
				subItem.icon,
				isMenuItemActive(`${item.path}/${subItem.path}`),
			))
		));
		setMenuItems(newItems);
	}

	const isMenuItemActive = (path: string) => {
		return path === currentUrl || ("/" + path) === currentUrl;
	}

	const navigate = (path: string) => {
		onItemClicked(path);
	}

	return (
		<nav className="sidebar navbar navbar-expand-lg navbar-dark bg-primary align-items-start">
			<ul className="navbar-nav navbar-dark accordion d-flex flex-column">
				<a className="sidebar-brand">
					<div className="sidebar-brand-icon rotate-n-15">
					</div>
					<div className="sidebar-brand-text mx-3">
						{title}
					</div>
				</a>

				{menuItems.map(item =>
					<li key={item.id} className={"nav-item level-0 " + (item.isActive ? "active" : "")}>
						<a className="nav-link" onClick={() => navigate(`/${item.path}`)}>
							{item.label}
						</a>

						{item.items &&
							<ul>
								{item.items.map(subItem => (
									<li key={subItem.id} className={"nav-item level-1 " + (subItem.isActive ? "active" : "")}>
										<a className="nav-link" onClick={() => navigate(`/${item.path}/${subItem.path}`)}>
											{subItem.label}
										</a>
									</li>
								))}
							</ul>
						}
					</li>
				)}
			</ul>
		</nav>
	);
}
