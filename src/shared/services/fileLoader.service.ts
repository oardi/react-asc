import axios, { AxiosResponse } from 'axios';
import { LoggerService } from '../../lib';

const CLASSNAME = 'HttpService';

export class FileLoaderService {

	constructor(
		private loggerService: LoggerService,
	) {
	}

	get<T>(segmentUrl: string, params?: any): Promise<AxiosResponse<T>> {
		this.loggerService.debug(CLASSNAME, 'get');
		return axios.get(segmentUrl, { params: params });
	}

}
