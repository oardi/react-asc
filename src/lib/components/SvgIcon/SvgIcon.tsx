import React from 'react';

export interface ISvgIconProp {
	svg: string;
}

export const SvgIcon = ({ svg }: ISvgIconProp) => (
	<div
		className="svg-icon"
		dangerouslySetInnerHTML={{ __html: svg }}>
	</div>
);
