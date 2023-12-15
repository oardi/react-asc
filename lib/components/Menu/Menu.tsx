import type { ReactElement } from 'react';
import React, { useRef } from 'react';
import type { IListItemProps } from '../List';
import { MenuBody } from './MenuBody';
import type { MenuPosition } from './menu.types';

export interface IMenuProps extends React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	toggle?: ReactElement;
	open?: boolean;
	children?: ReactElement<IListItemProps> | ReactElement<IListItemProps>[];
	menuPosition?: MenuPosition;
	onClickBackdrop?: () => void;
}

export const Menu = (props: IMenuProps): JSX.Element => {
	const { toggle, children, className, open, menuPosition, onClickBackdrop, ...rest } = props;

	const menuContainer: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
	const toggleContainerRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickBackdrop = (): void => {
		onClickBackdrop && onClickBackdrop();
	};

	return (
		<div ref={menuContainer} className={getCssClasses()} {...rest}>
			<div className="d-inline" ref={toggleContainerRef}>
				{toggle}
			</div>

			{open && (
				<MenuBody parentRef={toggleContainerRef} menuPosition={menuPosition} onClickBackdrop={handleClickBackdrop}>
					{children}
				</MenuBody>
			)}
		</div>
	);
};
