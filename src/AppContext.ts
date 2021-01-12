import { createContext, Dispatch, useContext } from 'react';
import { IAppInfo } from './app.interfaces';
import { LoggerService, ModalService, SnackbarService } from './lib';
import { FileLoaderService } from './shared';

export interface IAppContext {
	fileLoaderService: FileLoaderService,
	loggerService: LoggerService,
	snackbarService: SnackbarService,
	modalService: ModalService,
	appInfo: IAppInfo;
	setAppInfo: Dispatch<IAppInfo>;
}

export const AppContext = createContext<IAppContext>(null);
export const useAppContext = () => useContext(AppContext);
