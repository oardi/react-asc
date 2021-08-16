import React, { ReactElement, useContext, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import { MenuPosition } from './dropDown.types';
import { DropDownContext } from './DropdownContext';
import { IDropDownItemProps } from './DropDownItem';
import { createPopper } from '@popperjs/core';
import styles from './DropDownMenu.module.scss';

export interface IDropDownMenuProps {
	children?: ReactElement<IDropDownItemProps> | Array<ReactElement<IDropDownItemProps>>;
	className?: string;
	menuPosition?: MenuPosition;
	parentRef: React.RefObject<any>;
}

export const DropDownMenu = (props: IDropDownMenuProps) => {

	const { parentRef, children, className, menuPosition = 'left' } = props;
	const dropDownMenuRef = useRef<HTMLDivElement>(null);
	const { setIsShow } = useContext(DropDownContext);

	useEffect(() => {
		if (dropDownMenuRef) {
			createPopper((parentRef.current as any), (dropDownMenuRef.current as any), {
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
	}, [dropDownMenuRef]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.dropdownMenu);
		// cssClasses.push(`dropdown-menu show`);
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
					ref={dropDownMenuRef}
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
