import React, { useEffect, useState } from 'react';
import { ScreenSize } from '../../../enums';
import { useScreenSizeDetect } from '../../../hooks';
import styles from './Row.module.scss';

export type TRowDirection = 'row' | 'column';

export interface IContainerProps extends React.ComponentProps<'div'> {
	direction?: TRowDirection;
}

export const Row = ({ children, direction = 'row', className, ...rest }: IContainerProps): JSX.Element => {
	const [_direction, setDirection] = useState<string>(direction);
	const { screenSize } = useScreenSizeDetect();
	useEffect(() => {
		setDirection(screenSize === ScreenSize.xs ? 'column' : 'row');
	}, [screenSize]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.row);
		className && cssClasses.push(className);
		direction && cssClasses.push(`flex-${_direction}`);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
