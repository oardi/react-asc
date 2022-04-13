import { IMenuItem } from './app.interfaces';

export const menuItems: Array<IMenuItem> = [
	{ id: "Home", path: "" },
	{ id: "GettingStarted", label: "Getting started" },
	{
		id: "Components",
		isCollapsible: true,
		isCollapsed: true,
		items: [
			{ id: "Alert", label: "Alert (beta)" },
			{ id: "AppBar" },
			{ id: "AutoComplete", label: "AutoComplete (beta)" },
			{ id: "Backdrop" },
			{ id: "Badge" },
			{ id: "Button" },
			{ id: "ButtonGroup" },
			{ id: "Breadcrumb" },
			{ id: "Card" },
			{ id: "Checkbox" },
			{ id: "Chip" },
			{ id: "CssTransition" },
			{ id: "DateSelect" },
			{ id: "Drawer" },
			{ id: "ExpansionPanel" },
			{ id: "FileInput" },
			{ id: "FloatingActionButton" },
			{ id: "Form", label: "Form (beta)" },
			{ id: "Grid", label: "Grid (beta)" },
			{ id: "Icon" },
			{ id: "IconButton" },
			{ id: "Link" },
			{ id: "List" },
			{ id: "LoadingIndicator" },
			{ id: "Menu" },
			{ id: "Modal" },
			{ id: "NumberSelect" },
			{ id: "Select" },
			{ id: "Snackbar" },
			{ id: "SpeedDial" },
			{ id: "Stepper", label: "Stepper (beta)" },
			{ id: "Table", label: "Table (beta)" },
			{ id: "Tabs" },
			{ id: "TimeSelect" },
			{ id: "Tooltip" },
			{ id: "TreeView", label: "TreeView (beta)" },
			{ id: "Typography" }
		]
	},
	{
		id: "Hooks",
		isCollapsible: true,
		isCollapsed: true,
		items: [
			{ id: "HookUseConstructor" },
			{ id: "HookUseDebounce" },
			{ id: "HookUseHover" },
			{ id: "HookUseMobileDetect" },
			{ id: "HookUseWindowSize" },
		]
	},
	{ id: "About" }
]
