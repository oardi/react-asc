import { createContext, Dispatch } from 'react';

export interface IMenuContext {
	isShow: boolean;
	setIsShow: Dispatch<boolean>;
}

export const MenuContext = createContext<IMenuContext>({
	isShow: false,
	setIsShow: () => { }
});
