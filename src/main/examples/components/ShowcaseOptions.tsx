import React, { Fragment } from 'react';
import { IControls } from 'lib';
import { ShowcaseSettings } from './ShowcaseSettings';

interface IShowcaseOptionsProps {
	controls: IControls;
	onFormChange: (val: unknown) => void;
}

export const ShowcaseOptions = ({ controls, onFormChange }: IShowcaseOptionsProps) => {
	return (
		<Fragment>
			<ShowcaseSettings
				controls={controls}
				onFormChange={onFormChange}
			/>
		</Fragment>
	);
}
