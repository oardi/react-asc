import React, { cloneElement, useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import styles from './Tooltip.module.scss';

export interface ITooltipProps extends React.ComponentProps<'div'>  {
	placement?: 'top' | 'bottom' | 'right' | 'left',
	text?: string;
}

export const Tooltip = (props: ITooltipProps) => {

	const { children, text, placement = 'bottom' } = props;

	const [show, setShow] = useState<boolean>(false);
	const refChild = useRef() as React.RefObject<HTMLDivElement>;
	const refTooltip = useRef() as React.RefObject<HTMLDivElement>;

	useEffect(() => {
		if (show === true && refChild && refChild.current && refTooltip && refTooltip.current) {
			// TODO - extract to own component?
			createPopper(refChild.current, refTooltip.current, {
				placement: placement,
				modifiers: [
					{
						name: 'offset',
						options: { offset: [0, 8] }
					},
				]
			});
		}
	}, [show]);

	const handleMouseOver = () => {
		setShow(true);
	}

	const handleMouseLeave = () => {
		setShow(false);
	}

	return (
		<>
			<div className={styles.tooltipContainer} ref={refChild} id="tooltip-container">
				{cloneElement(children as React.ReactElement, {
					onMouseOver: handleMouseOver,
					onMouseLeave: handleMouseLeave,
				})}
			</div>

			{show &&
				<div className={styles.tooltip} ref={refTooltip} id="tooltip">
					{text}
					<div id="arrow" data-popper-arrow></div>
				</div >
			}
		</>
	);
}
