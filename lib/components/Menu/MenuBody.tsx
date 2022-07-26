import React, { ReactElement, useEffect, useRef } from 'react';
import { Backdrop } from '../Backdrop';
import { MenuPosition } from './menu.types';
import { createPopper } from '@popperjs/core';
import styles from './MenuBody.module.scss';
import { Portal } from '../Portal';
import { IListItemProps, List } from '../List';

export interface IMenuBodyProps {
	children?: ReactElement<IListItemProps> | Array<ReactElement<IListItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
	parentRef: React.RefObject<HTMLDivElement>;
	shadow?: boolean;
	onClickBackdrop?: () => void;
}

export const MenuBody = (props: IMenuBodyProps) => {

	const { parentRef, children, className, shadow = true, menuPosition = 'left', onClickBackdrop } = props;
	const menuBodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (menuBodyRef && parentRef.current && menuBodyRef.current) {
			createPopper(parentRef.current, menuBodyRef.current, {
				placement: `${menuPosition}-start`,
				modifiers: [
					{
						name: 'offset',
						options: {
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							offset: ({ placement, popper }: any) => {
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
		<Portal className='menu-root'>
			<div
				ref={menuBodyRef}
				className={getCssClasses()}
			>
				<List>
					{children}
				</List>
			</div>

			<Backdrop
				isTransparent
				onClick={handleClickBackdrop}
			/>
		</Portal>
	)
}
