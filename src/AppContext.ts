import { createContext } from 'react';
import { LoggerService, SnackbarService } from './lib';
import { FileLoaderService } from './shared';

export interface IAppContext {
	fileLoaderService: FileLoaderService,
	loggerService: LoggerService,
	snackbarService: SnackbarService
}

export const AppContext = createContext<IAppContext>(null);
