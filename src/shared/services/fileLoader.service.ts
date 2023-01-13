import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { loggerService } from './logger.service';

const CLASSNAME: string = 'FileLoaderService';

class FileLoaderService {
	get<T>(segmentUrl: string, params?: AxiosRequestConfig<unknown> | undefined): Promise<AxiosResponse<T>> {
		loggerService.debug(CLASSNAME, 'get', segmentUrl);
		return axios.get(segmentUrl, { params: params });
	}
}

export const fileLoaderService: FileLoaderService = new FileLoaderService();
