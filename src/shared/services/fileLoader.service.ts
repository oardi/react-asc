import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { loggerService } from './logger.service';

const CLASSNAME = 'FileLoaderService';

class FileLoaderService {
	get<T>(segmentUrl: string, params?: AxiosRequestConfig<unknown> | undefined): Promise<AxiosResponse<T>> {
		loggerService.debug(CLASSNAME, 'get', segmentUrl);
		return axios.get(segmentUrl, { params: params });
	}

}

export const fileLoaderService = new FileLoaderService();
