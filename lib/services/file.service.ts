import saveAs from 'file-saver';
import type { ParseResult, UnparseObject } from 'papaparse';
import { parse, unparse } from 'papaparse';
import type { Nullable } from '../types';
import { loggerService } from './logger.service';

const CLASSNAME: string = 'FileService';

export class FileService {
	readAsText(file: File): Promise<ProgressEvent<FileReader>> {
		loggerService.debug(CLASSNAME, 'readAsText');
		const fileReader: FileReader = new FileReader();
		return new Promise((resolve, reject) => {
			fileReader.onload = (event: ProgressEvent<FileReader>): void => {
				resolve(event);
			};
			fileReader.onerror = (event: ProgressEvent<FileReader>): void => {
				reject(event);
			};
			fileReader.readAsText(file);
		});
	}

	readAsBinaryString(file: File): Promise<ProgressEvent<FileReader>> {
		loggerService.debug(CLASSNAME, 'readAsBinaryString');
		const fileReader: FileReader = new FileReader();
		return new Promise((resolve, reject) => {
			fileReader.onload = (event: ProgressEvent<FileReader>): void => {
				resolve(event);
			};
			fileReader.onerror = (event: ProgressEvent<FileReader>): void => {
				reject(event);
			};
			fileReader.readAsBinaryString(file);
		});
	}

	unparse<T>(data: T[] | UnparseObject<T>, config?: IFileUnparseConfig): string {
		loggerService.debug(CLASSNAME, 'unparse');
		return unparse(data, {
			delimiter: config && config.delimiter ? config.delimiter : ';',
		});
	}

	parse<T>(content: string | File): Promise<ParseResult<T>> {
		loggerService.debug(CLASSNAME, 'parse');
		return new Promise((resolve, reject) => {
			parse(content, {
				header: true,
				complete: (results: ParseResult<T>) => resolve(results),
				error: (err: Error) => reject(err),
			});
		});
	}

	saveAs(content: BlobPart, fileName: string, fileType: string): void {
		loggerService.debug(CLASSNAME, 'saveAs');
		const blob: Blob = new Blob([content], { type: fileType });
		saveAs(blob, fileName, { autoBom: true });
	}

	getFileExtension(filename: string): string {
		let result: string = '-';
		if (/[.]/.exec(filename)) {
			const regexp: Nullable<RegExpExecArray> = /[^.]+$/.exec(filename);
			result = `.${regexp?.[0]}`;
		}
		return result;
	}
}

export interface IFileUnparseConfig {
	delimiter?: string;
	header?: boolean;
}

export const fileService: FileService = new FileService();
