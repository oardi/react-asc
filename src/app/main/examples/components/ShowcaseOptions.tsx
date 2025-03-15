import { Fragment } from 'react';
import type { IControls } from 'src/lib';
import { ShowcaseSettings } from './ShowcaseSettings';

interface IShowcaseOptionsProps {
	controls: IControls;
	onFormChange: (val: unknown) => void;
}

export const ShowcaseOptions = ({ controls, onFormChange }: IShowcaseOptionsProps): React.JSX.Element => {
	return (
		<Fragment>
			<ShowcaseSettings controls={controls} onFormChange={onFormChange} />
		</Fragment>
	);
};
