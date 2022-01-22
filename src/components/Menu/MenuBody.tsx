import React, { ReactElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { MenuPosition } from './menu.types';
import { IMenuItemProps } from './MenuItem';
import { createPopper } from '@popperjs/core';
import styles from './MenuBody.module.scss';

export interface IMenuBodyProps {
	children?: ReactElement<IMenuItemProps> | Array<ReactElement<IMenuItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
	parentRef: React.RefObject<any>;
	shadow?: boolean;
	onClickBackdrop?: () => void;
}

export const MenuBody = (props: IMenuBodyProps) => {

	const { parentRef, children, className, shadow = true, menuPosition = 'left', onClickBackdrop } = props;
	const menuBodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (menuBodyRef) {
			createPopper((parentRef.current as any), (menuBodyRef.current as any), {
				placement: `${menuPosition}-start`,
				modifiers: [
					{
						name: 'offset',
						options: {
							offset: ({ placement, reference, popper }: any) => {
								if (placement === 'left-start') {
									return [0, -popper.width]; // y, x
								}
								if (placement === 'right-start') {
									return [0, -popper.width];
								}
								return [];
							},
						},

					},
				]
			});
		}
	}, [menuBodyRef]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.menuBody);
		shadow && cssClasses.push(styles.shadow);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	}

	return (
		createPortal(
			<>
				<div
					ref={menuBodyRef}
					className={getCssClasses()}
				>
					{children}
				</div>

				<Backdrop
					isTransparent
					onClick={handleClickBackdrop}
				/>
			</>,
			document.body
		)
	)
}
