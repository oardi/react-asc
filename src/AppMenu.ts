import { IMenuItem } from './app.interfaces';

export const menuItems: Array<IMenuItem> = [
	{ id: "Home", path: "" },
	{ id: "GettingStarted", label: "Getting started" },
	{
		id: "Showcase",
		isCollapsible: true,
		isCollapsed: true,
		items: [
			{ id: "AppBar" },
			{ id: "Backdrop" },
			{ id: "Badge" },
			{ id: "Button" },
			{ id: "ButtonGroup" },
			{ id: "Breadcrumb" },
			{ id: "Card" },
			{ id: "Checkbox" },
			{ id: "Chip" },
			{ id: "DateSelect" },
			{ id: "Drawer" },
			{ id: "DropDown" },
			{ id: "ExpansionPanel" },
			{ id: "FileInput" },
			{ id: "FloatingActionButton" },
			{ id: "Form" },
			{ id: "Grid" },
			{ id: "Icon" },
			{ id: "IconButton" },
			{ id: "Link" },
			{ id: "List" },
			{ id: "LoadingIndicator" },
			{ id: "Modal" },
			{ id: "NumberSelect" },
			{ id: "Select" },
			{ id: "Snackbar" },
			{ id: "SpeedDial" },
			{ id: "Stepper" },
			{ id: "Table" },
			{ id: "Tabs" },
			{ id: "TimeSelect" },
			{ id: "Tooltip" },
			{ id: "TreeView" },
			{ id: "Typography" }
		]
	},
	{ id: "About" }
]
