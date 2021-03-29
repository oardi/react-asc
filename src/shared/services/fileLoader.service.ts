import axios, { AxiosResponse } from 'axios';
import { loggerService } from './logger.service';

const CLASSNAME = 'HttpService';

export interface IFileLoaderService {
	get<T>(segmentUrl: string, params?: any): Promise<AxiosResponse<T>>;
}

class FileLoaderService implements IFileLoaderService {
	get<T>(segmentUrl: string, params?: any): Promise<AxiosResponse<T>> {
		loggerService.debug(CLASSNAME, 'get');
		return axios.get(segmentUrl, { params: params });
	}

}

export const fileLoaderService = new FileLoaderService();
