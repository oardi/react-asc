import { ReactElement } from 'react';
import { COLOR } from '../component.enums';
import { ITabProps } from './Tab';
export interface ITabsProps {
    color?: COLOR;
    indicatorColor?: COLOR;
    children?: ReactElement<ITabProps> | Array<ReactElement<ITabProps>>;
    className?: string;
    fixed?: boolean;
    onChange?: (event: any, newValue: string) => void;
    value?: string;
}
export declare const Tabs: (props: ITabsProps) => JSX.Element;
