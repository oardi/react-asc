import { Dispatch } from 'react';
export interface IDropDownContext {
    isShow: boolean;
    setIsShow: Dispatch<boolean>;
}
export declare const DropDownContext: import("react").Context<IDropDownContext>;
