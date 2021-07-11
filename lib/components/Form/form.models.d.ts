import { IFormControlConfig, IFormInputError } from './form.interfaces';
import { IFormControlType } from './form.types';
export declare class FormControl {
    value: any;
    validators: Array<any>;
    type: IFormControlType;
    config: IFormControlConfig;
    constructor(value: any, validators: Array<any>, type: IFormControlType, config: IFormControlConfig);
    errors: Array<IFormInputError>;
    isValid: boolean;
    isDirty: boolean;
}
