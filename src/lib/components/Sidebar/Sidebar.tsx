import React, { useEffect, useState } from "react";
import { List, ListItem } from '../List';
import { SidebarItemModel } from './sidebar.models';

interface ISidebarProps {
	title?: string;
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

	const navigate = (e: React.MouseEvent, path: string) => {
		e.stopPropagation();
		onItemClicked(path);
	}

	return (
		<nav className="sidebar navbar navbar-expand-lg align-items-start">
			{/* {title && (
				<a className="sidebar-brand">
					<div className="sidebar-brand-icon rotate-n-15">
					</div>
					<div className="sidebar-brand-text mx-3">
						{title}
					</div>
				</a>
			)} */}

			<List>
				{menuItems.map(item =>
					<ListItem
						key={item.id}
						onClick={(e) => navigate(e, `/${item.path}`)}
					>
						<div className="d-flex flex-column w-100">
							{item.label}

							{item.items &&
								<List>
									{item.items.map(subItem => (
										<ListItem
											key={subItem.id}
											onClick={(e) => navigate(e, `/${item.path}/${subItem.path}`)}
										>
											{subItem.label}
										</ListItem>
									))}
								</List>
							}
						</div>
					</ListItem>
				)}
			</List>
		</nav>
	);
}
