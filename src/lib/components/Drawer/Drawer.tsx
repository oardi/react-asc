import React, { Fragment, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from '../Backdrop';
import styles from './Drawer.module.scss';

export interface IDrawerProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	className?: string;
	onClickBackdrop?: () => void;
	permanent?: boolean;
	target?: HTMLElement;
}

export const Drawer = (props: IDrawerProps) => {

	const { children, className = '', position = 'left', permanent = false, target = document.body, onClickBackdrop } = props;

	useEffect(() => {
		document.body.classList.add(styles.drawerOpen);
		return () => {
			document.body.classList.remove(styles.drawerOpen);
		};
	}, []);

	const handleClickBackdrop = () => {
		onClickBackdrop && onClickBackdrop();
	}

	return createPortal(
		<Fragment>
			<DrawerContent className={className} position={position} permanent={permanent}>
				{children}
			</DrawerContent>
			{!permanent && <Backdrop onClick={handleClickBackdrop} />}
		</Fragment>,
		target
	);
}

interface IDrawerContentProps {
	children?: ReactNode;
	position?: 'left' | 'right';
	className?: string;
	permanent?: boolean;
}

const DrawerContent = (props: IDrawerContentProps) => {
	const { children, className = '', position = 'left', permanent = false } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.drawer);
		cssClasses.push(className);
		!!permanent && cssClasses.push(styles['permanent']);
		position === 'left' ? cssClasses.push(styles['left']) : cssClasses.push(styles['right']);
		return cssClasses.filter(css => css).join(' ');
	};

	const positionStyles = {
		left: { left: '0px' },
		right: { right: '0px' },
	};

	const getStyles = () => {
		return !permanent ? positionStyles[position] : undefined;
	};

	return <div className={getCssClasses()} style={getStyles()}>
		{children}
	</div>
}
