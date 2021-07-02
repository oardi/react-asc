import React, { Fragment, useEffect } from 'react';
import { Card, CardBody, CardImage, CardSubtitle, CardText, CardTitle, FormControl } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

interface ICardPageBaseProps {
	showImage?: boolean;
}

const CardPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ICardPageBaseProps>) => {

	useEffect(() => {
		setSettingsControls({
			showImage: new FormControl(settingValues.showImage, [], 'checkbox', { label: 'showImage' }),
		});
	}, []);

	return (
		<Fragment>
			<div className="d-flex justify-content-center mt-3">
				<Card style={{ width: '320px' }}>
					{
						settingValues.showImage &&
						<CardImage src="./logo512.png" alt="some logo" />
					}
					<CardBody>
						<CardTitle>Title</CardTitle>
						<CardSubtitle>SubTitle</CardSubtitle>
						<CardText>
							some card text
						</CardText>
					</CardBody>
				</Card>
			</div>
		</Fragment>
	);
}

export const CardPage = withOptions<ICardPageBaseProps>(CardPageBase, {
	showImage: false
}, 'CardPageBase');
