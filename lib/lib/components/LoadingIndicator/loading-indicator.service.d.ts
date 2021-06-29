export interface ILoadingIndicatorService {
    show(message: string, options?: ILoadingIndicatorOptions): Promise<void>;
}
export interface ILoadingIndicatorOptions {
}
declare class LoadingIndicatorService implements ILoadingIndicatorService {
    private container;
    private handler;
    show(): Promise<void>;
    hide(): void;
}
export declare const loadingIndicatorService: LoadingIndicatorService;
export {};
