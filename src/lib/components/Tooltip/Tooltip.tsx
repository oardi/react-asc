import React, { ReactNode } from 'react';

export interface ITooltipProps {
	children?: ReactNode;
}

export const Tooltip = ({ children }: ITooltipProps) => {
	// bs-tooltip-left
	// bs-tooltip-top
	// bs-tooltip-bottom
	// bs-tooltip-right
	return (
		<div className="tooltip fade bs-tooltip-top show"
			style={{
				position: 'absolute',
				top: '0px',
				left: '0px',
				willChange: 'transform'
			}}>
			<div className="arrow" style={{ left: '45px' }}></div>
			<div className="tooltip-inner">
				{children}
			</div>
		</div >
	);
}

		// <div className="tooltip bs-tooltip-left show fade">
		// 	<div className="arrow" style={{ left: '45px' }}>
		// 	</div>
		// </div>
