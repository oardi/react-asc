import type { Instance } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import type { ReactElement } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { useOnDestroy } from '../../hooks';
import { Backdrop } from '../Backdrop';
import type { IListItemProps } from '../List';
import { List } from '../List';
import { Portal } from '../Portal';
import styles from './MenuBody.module.scss';
import type { MenuPosition } from './menu.types';

export interface IMenuBodyProps {
	children?: ReactElement<IListItemProps> | ReactElement<IListItemProps>[];
	className?: string;
	menuPosition?: MenuPosition;
	parentRef: React.RefObject<HTMLDivElement | null>;
	shadow?: boolean;
	onClickBackdrop?: () => void;
}

export const MenuBody = (props: IMenuBodyProps): React.JSX.Element => {
	const { parentRef, children, className, shadow = true, menuPosition = 'left', onClickBackdrop } = props;
	const [popperInstance, setPopperInstance] = useState<Instance>();
	const menuBodyRef: React.RefObject<HTMLDivElement | null> = useRef(null);

	useEffect(() => {
		if (menuBodyRef && parentRef.current && menuBodyRef.current) {
			const popperInstance: Instance = createPopper(parentRef.current, menuBodyRef.current, {
				placement: `${menuPosition}-start`,
				modifiers: [
					{
						name: 'offset',
						options: {
							// eslint-disable-next-line @typescript-eslint/no-explicit-any
							offset: ({ placement, popper }: any): number[] => {
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
				],
			});
			setPopperInstance(popperInstance);
		} else {
			popperInstance?.destroy();
		}
	}, [menuBodyRef]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.menuBody);
		shadow && cssClasses.push(styles.shadow);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickBackdrop = (): void => {
		onClickBackdrop && onClickBackdrop();
	};

	useOnDestroy(() => {
		popperInstance?.destroy();
	});

	return (
		<Portal className="menu-root">
			<div ref={menuBodyRef} className={getCssClasses()}>
				<List>{children}</List>
			</div>

			<Backdrop isTransparent onClick={handleClickBackdrop} />
		</Portal>
	);
};
