import React, { useEffect, useState } from 'react';
import { COLOR, ISpeedDialProps, snackbarService, SpeedDial, SpeedDialAction } from 'lib';
import { InfoSolidIcon } from '../assets';
import { IShowcaseBaseProps, withOptions } from './components';

const SpeedDialPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ISpeedDialProps>) => {

	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	const handleClick = (index: number) => {
		snackbarService.show(`you clicked action: ${index}`);
		handleClose();
	}

	const handleOpen = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false);
	}

	return (
		<div style={{ height: '200px', position: 'relative' }}>
			<SpeedDial
				open={open}
				onOpen={handleOpen}
				onClose={handleClose}
				style={{ position: 'absolute', bottom: 0, right: 0 }}>
				<SpeedDialAction
					icon={<InfoSolidIcon />}
					tooltipTitle="some tooltip text"
					color={COLOR.primary}
					onClick={() => handleClick(1)}
				/>
				<SpeedDialAction
					icon={<InfoSolidIcon />}
					tooltipTitle="some tooltip text"
					onClick={() => handleClick(2)}
				/>
			</SpeedDial>
		</div>
	);
}

export const SpeedDialPage = withOptions<ISpeedDialProps>(SpeedDialPageBase, {

}, 'SpeedDialPageBase');
