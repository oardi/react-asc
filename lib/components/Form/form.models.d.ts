import { IFormInputError, IFormInputOptions, IFormTextAreaOptions } from './form.interfaces';
import { IControlType, IFormValidator } from './form.types';
export declare class FormControlConfig {
    label: string;
    placeholder?: string;
    formControlClassName?: string;
    formGroupClassName?: string;
    labelClassName?: string;
    labelPosition?: string;
    autoFocus?: boolean;
    hint?: string;
    disabled?: boolean;
    readonly?: boolean;
    options?: Array<IFormInputOptions>;
    textareaOptions?: IFormTextAreaOptions;
}
export declare class FormControl {
    value: any;
    validators: Array<IFormValidator>;
    type: IControlType;
    config: FormControlConfig;
    constructor(value: any, validators: Array<IFormValidator>, type: IControlType, config: FormControlConfig);
    errors: Array<IFormInputError>;
    isValid: boolean;
    isDirty: boolean;
}
