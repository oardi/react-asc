import { Card, CardBody, Form, IControls, IFormValues } from 'lib';

interface IShowcaseSettingsProps {
	controls: IControls;
	onFormChange: (val: IFormValues) => void;
}

export const ShowcaseSettings = ({ controls, onFormChange }: IShowcaseSettingsProps): JSX.Element => {
	return (
		<Card shadow={false}>
			<CardBody>
				<Form
					controls={controls}
					validateOnBlur
					onChange={onFormChange}
				/>
			</CardBody>
		</Card>
	);
};
