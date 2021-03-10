import { IFormInputError } from './form.interfaces';
interface IFormErrorProps {
    className?: string;
    errors?: Array<IFormInputError>;
}
export declare const FormError: (props: IFormErrorProps) => JSX.Element;
export {};
