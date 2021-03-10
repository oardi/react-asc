import { createContext, Dispatch } from 'react';

export interface IDropDownContext {
	isShow: boolean;
	setIsShow: Dispatch<boolean>;
}

export const DropDownContext = createContext<IDropDownContext>({
	isShow: false,
	setIsShow: () => { }
});
