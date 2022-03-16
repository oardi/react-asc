import { createContext, useContext } from 'react';

export interface ITableContext {
	variant: 'head' | 'body';
}

export const TableContext = createContext<ITableContext>({
	variant: 'head'
});
export const useTableContext = () => useContext(TableContext);
