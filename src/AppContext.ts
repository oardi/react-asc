import { Context, createContext, Dispatch, useContext } from 'react';
import { IAppInfo } from './app.interfaces';

export interface IAppContext {
	appInfo?: IAppInfo;
	setAppInfo?: Dispatch<IAppInfo>;
}

export const AppContext: Context<IAppContext> = createContext<IAppContext>({});
export const useAppContext = () => useContext(AppContext);
