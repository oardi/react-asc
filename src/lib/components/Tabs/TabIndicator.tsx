import React from 'react';
import styles from './TabIndicator.module.scss';

export const TabIndicator = () => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.tabIndicator);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<span className={getCssClasses()}></span>
	);
}
