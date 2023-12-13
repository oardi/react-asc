import type { Color, VARIANT } from '../../enums';
import type { MODALBUTTONTYPE } from './modal.enum';

export interface IModalButton {
	label: string;
	variant?: VARIANT;
	color?: Color;
	handler?: () => void;
	autoFocus?: boolean;
	type?: MODALBUTTONTYPE;
	focus?: boolean;
	shadow?: boolean;
}
