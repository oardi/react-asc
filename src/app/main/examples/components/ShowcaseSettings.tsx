import type { IControls } from 'src/lib';
import { Card, CardBody, Form } from 'src/lib';

interface IShowcaseSettingsProps {
	controls: IControls;
	onFormChange: (val: unknown) => void;
}

export const ShowcaseSettings = ({ controls, onFormChange }: IShowcaseSettingsProps): React.JSX.Element => {
	return (
		<Card shadow={false}>
			<CardBody>
				<Form controls={controls} validateOnBlur onChange={onFormChange} />
			</CardBody>
		</Card>
	);
};
