import type { Context, Dispatch } from 'react';
import { createContext, useContext } from 'react';
import type { IAppInfo } from './app.interfaces';

export interface IAppContext {
	appInfo?: IAppInfo;
	setAppInfo?: Dispatch<IAppInfo>;
}

export const AppContext: Context<IAppContext> = createContext<IAppContext>({});
export const useAppContext = (): IAppContext => useContext(AppContext);
