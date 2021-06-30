/// <reference types="react" />
interface IConditionalWrapperProps {
    condition: boolean;
    wrapper: (children: React.ReactNode) => any;
    children: React.ReactNode;
}
export declare const ConditionalWrapper: ({ condition, wrapper, children }: IConditionalWrapperProps) => any;
export {};
