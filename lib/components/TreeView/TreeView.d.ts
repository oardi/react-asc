/// <reference types="react" />
export interface ITreeViewProps {
    data: Array<any>;
    onSelect: (selectedItems: Array<any>) => void;
}
export declare const TreeView: (props: ITreeViewProps) => JSX.Element;
