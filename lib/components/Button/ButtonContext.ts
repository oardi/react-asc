import { createContext, useContext } from 'react';
import { COLOR } from '../component.enums';

export interface IButtonContext {
	color: COLOR;
}

export const ButtonContext = createContext<IButtonContext>({
	color: COLOR.primary
});
export const useButtonContext = () => useContext(ButtonContext);
