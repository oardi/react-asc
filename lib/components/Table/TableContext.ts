import type { Context} from 'react';
import { createContext, useContext } from 'react';

export interface ITableContext {
	variant: 'head' | 'body';
}

export const TableContext: Context<ITableContext> = createContext<ITableContext>({
	variant: 'head'
});
export const useTableContext = (): ITableContext => useContext(TableContext);
