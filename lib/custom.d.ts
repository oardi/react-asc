// declare module "*.svg?inline" {
// 	const content: any;
// 	export default content;
// }

declare module '*.svg' {
	import React = require('react');
	export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const src: string;
	export default src;
}

declare module '*.module.scss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.md';

// declare module 'react' {
//     interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
//         jsx?: boolean;
//         global?: boolean;
//     }
// }
