import { IFormControlConfig, IFormInputError } from './form.interfaces';
import { IFormControlType, IFormValidatorType } from './form.types';
export declare class FormControl {
    value: any;
    validators: Array<IFormValidatorType>;
    type: IFormControlType;
    config: IFormControlConfig;
    constructor(value: any, validators: Array<IFormValidatorType>, type: IFormControlType, config: IFormControlConfig);
    errors: Array<IFormInputError>;
    isValid: boolean;
    isDirty: boolean;
}
