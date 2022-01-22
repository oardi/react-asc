import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemAction, ListItemText } from '../List';
import { ISidebarItem } from './sidebar.interfaces';
import { SidebarItemModel } from './sidebar.models';
import { ChevronUpSolidIcon, ChevronDownSolidIcon } from '../../icons';

interface ISidebarProps extends React.ComponentProps<"nav"> {
	items: Array<ISidebarItem>;
	currentUrl: string;
	onItemClicked: (path: string) => void;
}

export const Sidebar = (props: ISidebarProps) => {

	const { className, items, currentUrl, onItemClicked, ...rest } = props;
	const [menuItems, setMenuItems] = useState<Array<SidebarItemModel>>([]);

	useEffect(() => {
		if (items && items.length > 0) {
			initMenuItems();
		}
	}, []);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

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
			)),
			item.isCollapsible,
			item.isCollapsed
		));
		setMenuItems(newItems);
	}

	const isMenuItemActive = (path: string) => {
		const lastSegment = currentUrl.substring(currentUrl.lastIndexOf('/') + 1, currentUrl.length);
		let result = false;
		if (currentUrl === '/' && path === '') {
			result = true;
		} else if (path !== '') {
			result = lastSegment ? lastSegment.toLowerCase() === path.toLowerCase() : false;
		}
		return result
	}

	const navigate = (e: React.MouseEvent, path: string) => {
		e.stopPropagation();
		e.preventDefault();
		onItemClicked(path);
	}

	const handleClickItem = (item: SidebarItemModel, e: React.MouseEvent<Element, MouseEvent>) => {
		if (item.items && item.items.length > 0 && item.isCollapsible) {
			const newMenuItems = menuItems.map((menuItem) => {
				if (item.id === menuItem.id) {
					menuItem.isCollapsed = !item.isCollapsed;
				}
				return menuItem;
			});
			setMenuItems(newMenuItems);
		} else {
			navigate(e, `/${item.path}`);
		}
	}

	const handleClickSubItem = (itemPath: string, subItemPath: string, e: React.MouseEvent<Element, MouseEvent>) => {
		navigate(e, `/${itemPath}/${subItemPath}`);
	}

	return (
		<nav className={getCssClasses()} {...rest}>

			<List>
				{menuItems.map(item => (
					<React.Fragment key={item.id}>
						<ListItem
							active={isMenuItemActive(item.path)}
							onClick={(e) => handleClickItem(item, e)}
						>
							<ListItemText primary={
								<>
									{item.label}
									{item.items && item.items.length > 0 && (<small className="ml-2">({item.items.length})</small>)}
								</>
							}
							/>

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
										active={isMenuItemActive(subItem.path)}
										key={subItem.id}
										onClick={(e) => handleClickSubItem(item.path, subItem.path, e)}
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
