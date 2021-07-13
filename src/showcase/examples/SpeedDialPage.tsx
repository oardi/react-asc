import React, { useEffect } from 'react';
import { ISpeedDialProps, SpeedDial, SpeedDialAction } from '../../lib';
import { InfoSolidIcon } from '../assets';
import { IShowcaseBaseProps, withOptions } from './components';

const SpeedDialPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISpeedDialProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	const handleClose = () => {
		console.warn('handleClose');
	}

	return (
		<div style={{ height: '200px', position: 'relative' }}>
			<SpeedDial style={{ position: 'absolute', bottom: 0, right: 0 }}>
				<SpeedDialAction
					icon={<InfoSolidIcon />}
					tooltipTitle="some tooltip text"
					onClick={handleClose}
				/>
			</SpeedDial>
		</div>
	);
}

export const SpeedDialPage = withOptions<ISpeedDialProps>(SpeedDialPageBase, {

}, 'SpeedDialPageBase');
