import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { loggerService } from './logger.service';

const CLASSNAME = 'HttpService';

class FileLoaderService {
	get<T>(segmentUrl: string, params?: AxiosRequestConfig<unknown> | undefined): Promise<AxiosResponse<T>> {
		loggerService.debug(CLASSNAME, 'get');
		return axios.get(segmentUrl, { params: params });
	}

}

export const fileLoaderService = new FileLoaderService();
