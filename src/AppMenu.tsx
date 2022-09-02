import type { IMenuItem } from './app.interfaces';
import {
	AboutPage,
	AlertPage,
	AppBarPage,
	AutoCompletePage,
	BackdropPage,
	BadgePage,
	BreadcrumbPage,
	ButtonGroupPage,
	ButtonPage,
	CardPage,
	CheckboxPage,
	ChipPage,
	CssTransitionPage,
	DateSelectPage,
	DrawerPage,
	ExpansionPanelPage,
	FileInputPage,
	FloatingActionButtonPage,
	FormPage,
	GettingStartedPage,
	GridPage,
	HomePage,
	HookUseConstructorPage,
	HookUseDebouncePage,
	HookUseHoverPage,
	HookUseMobileDetectPage,
	HookUseOnDestroyPage,
	HookUseWindowSizePage,
	IconButtonPage,
	IconPage,
	LinkPage,
	ListPage,
	LoadingIndicatorPage,
	MenuPage,
	ModalPage,
	NumberSelectPage,
	ProgressBarPage,
	SelectPage,
	SkeletonPage,
	SnackbarPage,
	SpeedDialPage,
	StepperPage,
	TablePage,
	TabsPage,
	TimeSelectPage,
	TooltipPage,
	TreeViewPage,
	TypographyPage
} from './main';

export const menuItems: IMenuItem[] = [
	{ id: 'Home', path: '', element: <HomePage /> },
	{ id: 'GettingStarted', label: 'Getting started', element: <GettingStartedPage /> },
	{
		id: 'Components',
		isCollapsible: true,
		isCollapsed: true,
		items: [
			{ id: 'Alert', label: 'Alert (beta)', element: <AlertPage /> },
			{ id: 'AppBar', element: <AppBarPage /> },
			{ id: 'AutoComplete', label: 'AutoComplete (beta)', element: <AutoCompletePage /> },
			{ id: 'Backdrop', element: <BackdropPage /> },
			{ id: 'Badge', element: <BadgePage /> },
			{ id: 'Button', element: <ButtonPage /> },
			{ id: 'ButtonGroup', element: <ButtonGroupPage /> },
			{ id: 'Breadcrumb', element: <BreadcrumbPage /> },
			{ id: 'Card', element: <CardPage /> },
			{ id: 'Checkbox', element: <CheckboxPage /> },
			{ id: 'Chip', element: <ChipPage /> },
			{ id: 'CssTransition', element: <CssTransitionPage /> },
			{ id: 'DateSelect', element: <DateSelectPage /> },
			{ id: 'Drawer', element: <DrawerPage /> },
			{ id: 'ExpansionPanel', element: <ExpansionPanelPage /> },
			{ id: 'FileInput', element: <FileInputPage /> },
			{ id: 'FloatingActionButton', element: <FloatingActionButtonPage /> },
			{ id: 'Form', label: 'Form (beta)', element: <FormPage /> },
			{ id: 'Grid', label: 'Grid (beta)', element: <GridPage /> },
			{ id: 'Icon', element: <IconPage /> },
			{ id: 'IconButton', element: <IconButtonPage /> },
			{ id: 'Link', element: <LinkPage /> },
			{ id: 'List', element: <ListPage /> },
			{ id: 'LoadingIndicator', element: <LoadingIndicatorPage /> },
			{ id: 'Menu', element: <MenuPage /> },
			{ id: 'Modal', element: <ModalPage /> },
			{ id: 'NumberSelect', element: <NumberSelectPage /> },
			{ id: 'ProgressBar', element: <ProgressBarPage /> },
			{ id: 'Select', element: <SelectPage /> },
			{ id: 'Skeleton', element: <SkeletonPage /> },
			{ id: 'Snackbar', element: <SnackbarPage /> },
			{ id: 'SpeedDial', element: <SpeedDialPage /> },
			{ id: 'Stepper', label: 'Stepper (beta)', element: <StepperPage /> },
			{ id: 'Table', label: 'Table (beta)', element: <TablePage /> },
			{ id: 'Tabs', element: <TabsPage /> },
			{ id: 'TimeSelect', element: <TimeSelectPage /> },
			{ id: 'Tooltip', element: <TooltipPage /> },
			{ id: 'TreeView', label: 'TreeView (beta)', element: <TreeViewPage /> },
			{ id: 'Typography', element: <TypographyPage /> }
		]
	},
	{
		id: 'Hooks',
		isCollapsible: true,
		isCollapsed: true,
		items: [
			{ id: 'HookUseConstructor', element: <HookUseConstructorPage /> },
			{ id: 'HookUseDebounce', element: <HookUseDebouncePage /> },
			{ id: 'HookUseHover', element: <HookUseHoverPage /> },
			{ id: 'HookUseMobileDetect', element: <HookUseMobileDetectPage /> },
			{ id: 'HookUseWindowSize', element: <HookUseWindowSizePage /> },
			{ id: 'HookUseOnDestroy', element: <HookUseOnDestroyPage /> },
		]
	},
	{ id: 'About', element: <AboutPage /> }
];
