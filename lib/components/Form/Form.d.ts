import React, { Component } from 'react';
import { IControls, IFormValues } from './form.interfaces';
import { FormControl } from './form.models';
export interface IFormProps {
    controls: IControls;
    validateOnBlur?: boolean;
    onSubmit?: (values: IFormValues) => void;
    onChange?: (values: IFormValues) => void;
    submitOnEnter?: boolean;
}
export interface IFormState {
    controls: IControls | undefined;
    isValid: boolean;
    isSubmitted: boolean;
    isChanged: boolean;
    submitOnEnter?: boolean;
}
export declare class Form extends Component<IFormProps, IFormState> {
    constructor(props: IFormProps);
    static getDerivedStateFromProps(nextProps: IFormProps, state: IFormState): {
        controls: IControls;
    };
    myForm: React.RefObject<HTMLFormElement>;
    handleChange(): void;
    private validateField;
    private handleInputChange;
    private handleOnBlur;
    private isRequired;
    private isInvalid;
    getControl(name: string): FormControl;
    private renderLabel;
    handleFormSubmit(): void;
    handleFormReset(): void;
    handleOnKeyDown(e: KeyboardEvent): void;
    destroy(): void;
    render(): JSX.Element;
}
