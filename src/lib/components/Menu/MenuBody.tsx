import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { MenuPosition } from './menu.types';
import { MenuContext } from './MenuContext';
import { IMenuItemProps } from './MenuItem';
import { createPopper } from '@popperjs/core';
import styles from './MenuBody.module.scss';

export interface IMenuBodyProps {
	children?: ReactElement<IMenuItemProps> | Array<ReactElement<IMenuItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
	parentRef: React.RefObject<any>;
}

export const MenuBody = (props: IMenuBodyProps) => {

	const { parentRef, children, className, menuPosition = 'left' } = props;
	const menuBodyRef = useRef<HTMLDivElement>(null);
	const { setIsShow } = useContext(MenuContext);

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
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	}

	const handleClickItem = () => {
		setIsShow(false);
	}

	return (
		createPortal(
			<>
				<div
					ref={menuBodyRef}
					className={getCssClasses()}
				>

					{children &&

						React.Children.map(children, child => (
							React.cloneElement(child, {
								onClick: (e: React.MouseEvent) => {
									child.props.onClick && child.props.onClick(e);
									child.props.type !== 'header' && handleClickItem()
								}
							})
						))}

				</div>

				<Backdrop
					isTransparent
					onClick={() => setIsShow(false)}
				/>
			</>,
			document.body
		)
	)
}
