/// <reference types="react" />
import { IFormInputError } from './form.interfaces';
interface IFormErrorProps {
    className?: string;
    errors?: Array<IFormInputError>;
}
export declare const FormError: ({ className, errors }: IFormErrorProps) => JSX.Element;
export {};
