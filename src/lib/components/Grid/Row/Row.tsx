import React, { useEffect, useState } from 'react';
import { ScreenSize } from '../../../enums';
import { useScreenSizeDetect } from '../../../hooks';
import type { Nullable } from '../../../types';
import styles from './Row.module.scss';

export type TRowDirection = 'row' | 'column';

export interface IContainerProps extends React.ComponentProps<'div'> {
	direction?: TRowDirection;
}

export const Row = ({ children, direction, className, ...rest }: IContainerProps): React.JSX.Element => {
	const [_direction, setDirection] = useState<Nullable<string>>(direction);
	const { screenSize } = useScreenSizeDetect();

	useEffect(() => {
		setDirection(direction);
	}, [direction]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.row);
		className && cssClasses.push(className);

		if (_direction) {
			cssClasses.push(`flex-${_direction}`);
		} else if (screenSize === ScreenSize.xs || screenSize === ScreenSize.sm) {
			cssClasses.push(`flex-column`);
		} else {
			cssClasses.push(`flex-row`);
		}

		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
			{children}
		</div>
	);
};
