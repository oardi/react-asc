import { createContext, useContext } from 'react';
import type { COLOR } from '../component.enums';

export interface IButtonContext {
	color: COLOR | null;
}

export const ButtonContext: React.Context<IButtonContext> = createContext<IButtonContext>({
	color: null
});
export const useButtonContext = (): IButtonContext => useContext(ButtonContext);
