import React, { cloneElement, Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import styles from './Tooltip.module.scss';

export interface ITooltipProps {
	placement?: 'top' | 'bottom' | 'right' | 'left',
	text?: string;
	children: ReactElement;
}

export const Tooltip = (props: ITooltipProps) => {

	const { children, text, placement = 'bottom' } = props;

	const [show, setShow] = useState<boolean>(false);
	const refChild = useRef(null);
	const refTooltip = useRef(null);

	useEffect(() => {
		if (show === true && refChild && refChild.current) {
			// TODO - extract to own component?
			createPopper((refChild.current as any), (refTooltip.current as any), {
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
		<Fragment>
			<div className={styles.tooltipContainer} ref={refChild} id="tooltip-container">
				{cloneElement(children, {
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
		</Fragment>
	);
}
