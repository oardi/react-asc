import React from 'react';
import { IControls } from '../../../lib';
// import { ShowcaseApiOptions } from './ShowcaseApiOptions';
import { ShowcaseSettings } from './ShowcaseSettings';

interface IShowcaseOptionsProps {
	controls: IControls;
	onFormChange: (val) => void;
}

export const ShowcaseOptions = ({ controls, onFormChange }: IShowcaseOptionsProps) => {
	return (
		<>
			<ShowcaseSettings
				controls={controls}
				onFormChange={onFormChange}
			/>

			{/* <ShowcaseApiOptions /> */}
		</>
	);
}
