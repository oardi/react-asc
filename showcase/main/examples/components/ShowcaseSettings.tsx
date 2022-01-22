import React from 'react';
import { Card, CardBody, CardTitle, Form, IControls } from '../../../../src';

interface IShowcaseSettingsProps {
	controls: IControls;
	onFormChange: (val: any) => void;
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
