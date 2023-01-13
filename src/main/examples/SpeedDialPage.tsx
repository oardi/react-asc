import React, { useEffect, useState } from 'react';
import type { ISpeedDialProps } from 'lib';
import { COLOR, snackbarService, SpeedDial, SpeedDialAction } from 'lib';
import { InfoSolidIcon } from '../assets';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const SpeedDialPageBase = ({ setSettingsControls }: IShowcaseBaseProps<ISpeedDialProps>): JSX.Element => {
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		setSettingsControls({});
	}, []);

	const handleClick = (index: string): void => {
		void snackbarService.show(`you clicked action: ${index}`);
		handleClose();
	};

	const handleOpen = (): void => {
		setOpen(true);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	return (
		<div style={{ height: '200px', position: 'relative' }}>
			<SpeedDial open={open} onOpen={handleOpen} onClose={handleClose} style={{ position: 'absolute', bottom: 0, right: 0 }}>
				<SpeedDialAction
					icon={<InfoSolidIcon />}
					tooltipTitle="some tooltip text"
					color={COLOR.primary}
					onClick={(): void => handleClick('1')}
				/>
				<SpeedDialAction icon={<InfoSolidIcon />} tooltipTitle="some tooltip text" onClick={(): void => handleClick('2')} />
			</SpeedDial>
		</div>
	);
};

export const SpeedDialPage: () => JSX.Element = withOptions<ISpeedDialProps>(SpeedDialPageBase, {}, 'SpeedDialPageBase');
