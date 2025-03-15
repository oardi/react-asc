import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

class FileLoaderService {
	get<T>(segmentUrl: string, params?: AxiosRequestConfig<unknown> | undefined): Promise<AxiosResponse<T>> {
		return axios.get(segmentUrl, { params: params });
	}
}

export const fileLoaderService: FileLoaderService = new FileLoaderService();
