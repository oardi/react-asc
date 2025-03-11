import type { Context, Dispatch } from 'react';
import { createContext } from 'react';

export interface IMenuContext {
	isShow: boolean;
	setIsShow: Dispatch<boolean>;
}

export const MenuContext: Context<IMenuContext> = createContext<IMenuContext>({
	isShow: false,
	setIsShow: () => Function
});
