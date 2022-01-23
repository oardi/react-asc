import { Card, CardBody, CardTitle, Form, IControls, IFormValues } from 'lib';

interface IShowcaseSettingsProps {
	controls: IControls;
	onFormChange: (val: IFormValues) => void;
}

export const ShowcaseSettings = ({ controls, onFormChange }: IShowcaseSettingsProps) => {
	return (
		<Card>
			<CardBody>
				<CardTitle>Settings</CardTitle>
				<Form
					controls={controls}
					validateOnBlur
					onChange={onFormChange}
				/>
			</CardBody>
		</Card>
	)
}
