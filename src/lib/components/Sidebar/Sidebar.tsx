import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemAction, ListItemText } from '../List';
import { ISidebarItem } from './sidebar.interfaces';
import { SidebarItemModel } from './sidebar.models';
import { ChevronUpSolidIcon, ChevronDownSolidIcon } from '../../assets/icons';

interface ISidebarProps {
	items: Array<ISidebarItem>;
	currentUrl: string;
	onItemClicked: (path: string) => void;
}

export const Sidebar = (props: ISidebarProps) => {

	const { items, currentUrl, onItemClicked } = props;

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

	const handleClickItem = (item: SidebarItemModel, e: any) => {
		if (item.items && item.items.length > 0) {
			const newMenuItems = menuItems.map((menuItem) => {
				if (item.id === menuItem.id) {
					const updatedItem = {
						...menuItem,
						isCollapsed: !menuItem.isCollapsed,
					};
					return updatedItem;
				}
				return menuItem;
			});
			setMenuItems(newMenuItems);
		} else {
			navigate(e, `/${item.path}`);
		}
	}

	return (
		<nav className="sidebar">

			<List>
				{menuItems.map(item => (
					<React.Fragment key={item.id}>
						<ListItem
							onClick={(e) => handleClickItem(item, e)}
						>
							<ListItemText primary={item.label} />

							{item.items && item.items.length > 0 &&
								<ListItemAction>
									{item.isCollapsed ? <ChevronDownSolidIcon /> : <ChevronUpSolidIcon />}
								</ListItemAction>
							}
						</ListItem>

						{!item.isCollapsed && item.items && item.items.length > 0 && (
							<List className="list-level-1" key={`${item.id}-sub`}>
								{item.items.map(subItem => (
									<ListItem
										className="list-item-level-1"
										key={subItem.id}
										onClick={(e) => navigate(e, `/${item.path}/${subItem.path}`)}
									>
										{subItem.label}
									</ListItem>
								))}
							</List>
						)}
					</React.Fragment>
				))}
			</List>
		</nav>
	);
}
