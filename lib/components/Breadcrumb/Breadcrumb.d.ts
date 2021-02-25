/// <reference types="react" />
import { IBreadcrumbItem } from './breadcrumb.interfaces';
export interface IBreadcrumbProps {
    items: Array<IBreadcrumbItem>;
    className?: string;
    onItemClick?: (item: IBreadcrumbItem) => void;
}
export declare const Breadcrumb: (props: IBreadcrumbProps) => JSX.Element;
