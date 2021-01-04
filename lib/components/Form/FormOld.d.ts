/// <reference types="react" />
import { IControls, IFormValues } from './form.interfaces';
export interface IFormOldProps {
    controls: IControls;
    validateOnBlur: boolean;
    onSubmit?: (values: IFormValues) => void;
    onChange?: (values: IFormValues) => void;
}
export interface IFormOldState {
    controls: IControls;
    isValid: boolean;
    isSubmitted: boolean;
    isChanged: boolean;
}
export declare const FormOld: ({ controls, validateOnBlur, onSubmit, onChange }: IFormOldProps) => JSX.Element;
