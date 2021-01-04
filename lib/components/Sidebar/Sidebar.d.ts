/// <reference types="react" />
import { SidebarItemModel } from './sidebar.models';
interface ISidebarProps {
    title: string;
    items: Array<SidebarItemModel>;
    currentUrl: string;
    onItemClicked: (path: string) => void;
}
export declare const Sidebar: ({ title, items, currentUrl, onItemClicked }: ISidebarProps) => JSX.Element;
export {};
