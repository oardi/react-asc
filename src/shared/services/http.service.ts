import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { LoggerService } from '../../lib';

const CLASSNAME = 'HttpService';

export class HttpService {

	constructor(
		private loggerService: LoggerService,
		private apiUrl: string
	) {
	}

	get<T>(segmentUrl: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		this.loggerService.debug(CLASSNAME, 'get');
		return axios.get(`${this.apiUrl}/${segmentUrl}`, config);
	}

	post<T>(segmentUrl: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		this.loggerService.debug(CLASSNAME, 'post');
		return axios.post(`${this.apiUrl}/${segmentUrl}`, data, config);
	}

	put<T>(segmentUrl: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		this.loggerService.debug(CLASSNAME, 'put');
		return axios.put(`${this.apiUrl}/${segmentUrl}`, data, config);
	}

	delete<T>(segmentUrl: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
		this.loggerService.debug(CLASSNAME, 'delete');
		return axios.delete(`${this.apiUrl}/${segmentUrl}`, config);
	}

}
