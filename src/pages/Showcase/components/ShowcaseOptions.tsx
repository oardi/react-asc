import React from 'react';
import { IControls } from '../../../lib';
import { ShowcaseApiOptions } from './ShowcaseApiOptions';
import { ShowcaseSettings } from './ShowcaseSettings';

interface IShowcaseOptionsProps {
	controls: IControls;
	onFormChange: (val) => void;
}

export const ShowcaseOptions = ({ controls, onFormChange }: IShowcaseOptionsProps) => {

	return (
		<div className="w-50 m-2">

			<ShowcaseSettings
				controls={controls}
				onFormChange={onFormChange}
			/>

			<ShowcaseApiOptions />
		</div>
	);
}
