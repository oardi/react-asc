import type { IControls } from 'lib';
import { Fragment } from 'react';
import { ShowcaseSettings } from './ShowcaseSettings';

interface IShowcaseOptionsProps {
	controls: IControls;
	onFormChange: (val: unknown) => void;
}

export const ShowcaseOptions = ({ controls, onFormChange }: IShowcaseOptionsProps): JSX.Element => {
	return (
		<Fragment>
			<ShowcaseSettings controls={controls} onFormChange={onFormChange} />
		</Fragment>
	);
};
