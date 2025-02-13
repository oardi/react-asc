import type { ReactNode} from 'react';
import React, { useEffect } from 'react';
import { Backdrop } from '../Backdrop';
import { Portal } from '../Portal';
import styles from './Drawer.module.scss';
import type { IDictionary } from '../../interfaces';

export interface IDrawerProps extends React.ComponentProps<'div'> {
	position?: 'left' | 'right';
	shadow?: boolean;
	onClickBackdrop?: () => void;
	permanent?: boolean;
	target?: HTMLElement;
}

export const Drawer = (props: IDrawerProps): JSX.Element => {

	const { children, className, position = 'left', permanent = false, target = document.body, shadow = true, onClickBackdrop, ...rest } = props;

	useEffect(() => {
		document.body.classList.add(styles.drawerOpen);
		return () => {
			document.body.classList.remove(styles.drawerOpen);
		};
	}, []);

	const handleClickBackdrop = (): void => {
		onClickBackdrop && onClickBackdrop();
	};

	return (
		<Portal className='drawer-root' target={target}>
			<DrawerContent className={className} position={position} permanent={permanent} shadow={shadow} {...rest}>
				{children}
			</DrawerContent>
			{!permanent && <Backdrop onClick={handleClickBackdrop} />}
		</Portal>
	);
};

interface IDrawerContentProps extends React.ComponentProps<'div'> {
	children?: ReactNode;
	position?: 'left' | 'right';
	className?: string;
	permanent?: boolean;
	shadow?: boolean;
}

const DrawerContent = (props: IDrawerContentProps): JSX.Element => {
	const { children, className, position = 'left', permanent = false, shadow, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.drawer);
		shadow && cssClasses.push(styles.shadow);
		!!permanent && cssClasses.push(styles['permanent']);
		position === 'left' ? cssClasses.push(styles['left']) : cssClasses.push(styles['right']);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	const positionStyles: IDictionary<React.CSSProperties> = {
		left: { left: '0px' },
		right: { right: '0px' }
	};

	const getStyles = (): React.CSSProperties | undefined => {
		return !permanent ? positionStyles[position] : undefined;
	};

	return (
		<div className={getCssClasses()} style={getStyles()} {...rest}>
			{children}
		</div>
	);
};
