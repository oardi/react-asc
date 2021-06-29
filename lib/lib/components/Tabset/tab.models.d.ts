import { ReactElement, ReactNode } from 'react';
import { ITabProps } from './Tab';
export declare class TabNavModel {
    constructor(dto: ReactElement<ITabProps>);
    eventKey: string;
    title: ReactNode;
    disabled?: boolean;
}
export declare class TabModel {
    constructor(dto: ReactElement<ITabProps>);
    key: any;
    props: ITabProps | undefined;
    type: any;
}
