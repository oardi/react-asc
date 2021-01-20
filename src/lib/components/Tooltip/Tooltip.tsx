import React, { cloneElement, Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';

export interface ITooltipProps {
	placement?: 'top' | 'bottom' | 'right' | 'left',
	text?: string;
	children?: ReactElement;
}

export const Tooltip = ({ children, text, placement = 'left' }: ITooltipProps) => {

	const [show, setShow] = useState<boolean>(false);
	const refChild = useRef();
	const refTooltip = useRef();

	useEffect(() => {
		if (show === true) {
			createPopper(refChild.current, refTooltip.current, {
				placement: placement,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: [0, 8],
						},
					},
				],
			});
		}
	}, [show]);

	// const handleClick = () => {
	// 	console.warn('handleClick');
	// }

	const handleMouseOver = () => {
		setShow(true);
	}

	const handleMouseLeave = () => {
		setShow(false);
	}

	return (
		<Fragment>
			<div ref={refChild} id="tooltip-container">
				{cloneElement(children, {
					// onClick: handleClick,
					onMouseOver: handleMouseOver,
					onMouseLeave: handleMouseLeave,
				})}
			</div>

			{show &&
				<div ref={refTooltip} id="tooltip">
					{text}
					<div id="arrow" data-popper-arrow></div>
				</div >
			}
		</Fragment>
	);
}
