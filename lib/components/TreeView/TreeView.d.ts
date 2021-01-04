/// <reference types="react" />
export interface ITreeViewProps {
    data: Array<any>;
    onSelect: (selectedItems: Array<any>) => void;
}
export declare const TreeView: ({ data, onSelect }: {
    data: any;
    onSelect: any;
}) => JSX.Element;
