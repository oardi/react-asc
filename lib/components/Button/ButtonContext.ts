import { createContext, useContext } from 'react';
import type { Color } from '../../enums';

export interface IButtonContext {
	color: Color | null;
}

export const ButtonContext: React.Context<IButtonContext> = createContext<IButtonContext>({
	color: null,
});
export const useButtonContext = (): IButtonContext => useContext(ButtonContext);
