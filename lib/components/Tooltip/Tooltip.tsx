import React, { useEffect, useRef, useState } from 'react';
import type { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import styles from './Tooltip.module.scss';
import { useDebounce, useOnDestroy } from '../../hooks';
import { Icon } from '../Icon';
import { TimesSolidIcon } from '../../icons';

export interface ITooltipProps extends React.ComponentProps<'div'> {
	placement?: 'top' | 'bottom' | 'right' | 'left',
	text?: string;
	delay?: number;
	isOpen?: boolean;
	isShowClose?: boolean;
}

export const Tooltip = (props: ITooltipProps): JSX.Element => {

	const {
		children,
		text,
		placement = 'bottom',
		isOpen = false,
		isShowClose = false,
		delay = 0
	} = props;

	const [popperInstance, setPopperInstance] = useState<Instance>();
	const [debounce, setDebounce] = useState<number>(delay);
	const [open, setOpen] = useState<boolean>(isOpen);
	const [show, setShow] = useState<boolean>(isOpen);
	const [showClose, setShowClose] = useState<boolean>(isShowClose);
	const refChild: React.RefObject<HTMLDivElement> = useRef() as React.RefObject<HTMLDivElement>;
	const refTooltip: React.RefObject<HTMLDivElement> = useRef() as React.RefObject<HTMLDivElement>;

	useDebounce(
		() => { setOpen(show); },
		debounce,
		[show]
	);

	useEffect(() => {
		setShow(isOpen);
	}, [isOpen]);

	useEffect(() => {
		setShowClose(isShowClose);
	}, [isShowClose]);

	useEffect(() => {
		setDebounce(delay);
	}, [delay]);

	useEffect(() => {
		if (open === true && refChild && refChild.current && refTooltip && refTooltip.current) {
			showTooltip();
		} else {
			hideTooltip();
		}
	}, [open]);

	const showTooltip = (): void => {
		const popperInstance: Instance = createPopper(refChild.current as HTMLDivElement, refTooltip.current as HTMLDivElement, {
			placement: placement,
			modifiers: [
				{
					name: 'offset',
					options: { offset: [0, 8] }
				},
			]
		});
		setPopperInstance(popperInstance);
	};

	const hideTooltip = (): void => {
		popperInstance?.destroy();
	};

	const handleMouseOver = (): void => {
		setShow(true);
	};

	const handleMouseLeave = (): void => {
		setShow(false);
	};

	const handleFocus = (): void => {
		setShow(true);
	};

	const handleBlur = (): void => {
		setShow(false);
	};

	const handleClickClose = (): void => {
		setShow(false);
	};

	useOnDestroy(() => {
		hideTooltip();
	});

	return (
		<>
			<div
				ref={refChild}
				className={styles.tooltipContainer}
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
				onFocus={handleFocus}
				onBlur={handleBlur}
			>
				{children}
			</div>

			{open && text &&
				<div className={styles.tooltip} ref={refTooltip} id="tooltip">
					<div className='d-flex align-items-center'>
						{text}

						{showClose &&
							<Icon className='ml-1' onClick={handleClickClose}>
								<TimesSolidIcon />
							</Icon>
						}
					</div>

					<div id="arrow" data-popper-arrow></div>
				</div >
			}
		</>
	);
};
