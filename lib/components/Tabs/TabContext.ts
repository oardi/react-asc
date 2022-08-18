import { Context, createContext, Dispatch, useContext } from 'react';

export interface ITabsContext {
	fixed?: boolean;
	selectedValue?: string;
	setSelectedValue?: Dispatch<string>;
}

export const TabContext: Context<ITabsContext> = createContext<ITabsContext>({});
export const useTabContext = (): ITabsContext => useContext(TabContext);
