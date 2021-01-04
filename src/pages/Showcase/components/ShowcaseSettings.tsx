import React from 'react';
import { Card, CardBody, CardText, CardTitle, Form, IControls } from '../../../lib';

interface IShowcaseSettingsProps {
	controls: IControls;
	onFormChange: (val) => void;
}

export const ShowcaseSettings = ({ controls, onFormChange }: IShowcaseSettingsProps) => {
	return (
		<Card>
			<CardBody>
				<CardTitle>Settings</CardTitle>
				<CardText>
					<Form
						controls={controls}
						validateOnBlur
						onChange={onFormChange}
					/>
				</CardText>
			</CardBody>
		</Card>
	)
}
