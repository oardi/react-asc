import React from 'react';
import styles from './StepConnector.module.scss';

export const StepConnector = () => {
	return (
		<div className={styles.stepConnector}>
			<div className={styles.stepConnectorLine + ' ' + styles.stepConnectorLineHorizontal}></div>
		</div>
	)
}
