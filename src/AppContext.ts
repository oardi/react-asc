import { createContext } from 'react';
import { LoggerService, ModalService, SnackbarService } from './lib';
import { FileLoaderService } from './shared';

export interface IAppContext {
	fileLoaderService: FileLoaderService,
	loggerService: LoggerService,
	snackbarService: SnackbarService,
	modalService: ModalService,
}

export const AppContext = createContext<IAppContext>(null);
