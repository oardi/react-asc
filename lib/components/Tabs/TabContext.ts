import { createContext, Dispatch, useContext } from 'react';

export interface ITabsContext {
	fixed: boolean;
	selectedValue: string;
	setSelectedValue: Dispatch<string>;
}

export const TabContext = createContext<ITabsContext>({
	fixed: false,
	selectedValue: '',
	setSelectedValue: () => { }
});
export const useTabContext = () => useContext(TabContext);
