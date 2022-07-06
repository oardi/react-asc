import { createContext, useContext } from 'react';
import { COLOR } from '../component.enums';

export interface IButtonContext {
	color: COLOR | null;
}

export const ButtonContext = createContext<IButtonContext>({
	color: null
});
export const useButtonContext = () => useContext(ButtonContext);
