import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import { Sidebar } from '../../lib';

interface IAppSidebarProps {
	currentRoute: string;
}

interface MenuItem {
	id: string;
	path: string;
	icon?: string;
}

export const AppSidebar = ({ currentRoute }: IAppSidebarProps) => {

	const { loggerService, fileLoaderService } = useContext(AppContext);
	const history = useHistory();
	const [items, setItems] = useState([]);

	useEffect(() => { init() }, []);

	const init = async () => {
		try {
			const menuJson = await fileLoaderService.get<Array<MenuItem>>('./public/menu.json');
			setItems(menuJson.data);
		} catch (err) { loggerService.error(err); }
	}

	const onItemClicked = (path: string) => {
		history.push(path);
	}

	return (
		<Sidebar
			items={items}
			currentUrl={currentRoute}
			onItemClicked={onItemClicked}
		/>
	);
}
