import { COLOR, VARIANT } from '../component.enums';
import { MODALBUTTONTYPE } from './modal.enum';
export interface IModalButton {
    label: string;
    variant?: VARIANT;
    color?: COLOR;
    handler?: () => void;
    autofocus?: boolean;
    type?: MODALBUTTONTYPE;
}
