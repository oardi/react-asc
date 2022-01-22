import React, { Fragment, useEffect } from 'react';
import { Card, CardBody, CardFooter, CardImage, CardSubtitle, CardText, CardTitle, FormControl, List, ListItem, ListItemText } from '../../../src';
import { IShowcaseBaseProps, withOptions } from './components';

interface ICardPageBaseProps {
	showImage?: boolean;
	showSubtitle?: boolean;
	showList?: boolean;
	showFooter?: boolean;
}

const CardPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ICardPageBaseProps>) => {

	useEffect(() => {
		setSettingsControls({
			showImage: new FormControl(settingValues.showImage, [], 'checkbox', { label: 'show image' }),
			showSubtitle: new FormControl(settingValues.showSubtitle, [], 'checkbox', { label: 'show subtitle' }),
			showList: new FormControl(settingValues.showList, [], 'checkbox', { label: 'show list' }),
			showFooter: new FormControl(settingValues.showFooter, [], 'checkbox', { label: 'show footer' }),
		});
	}, []);

	return (
		<Fragment>
			<div className="d-flex justify-content-center">
				<Card style={{ width: '320px' }}>
					{
						settingValues.showImage &&
						<CardImage src="./manifest-icon-512.png" alt="some alt text" />
					}
					<CardBody>
						<CardTitle>Title</CardTitle>
						{
							settingValues.showSubtitle &&
							<CardSubtitle>SubTitle</CardSubtitle>
						}
						<CardText>
							some card text
						</CardText>
					</CardBody>

					{
						settingValues.showList &&
						<List>
							<ListItem>
								<ListItemText primary="lorem ipsum" />
							</ListItem>
							<ListItem>
								<ListItemText primary="lorem ipsum" />
							</ListItem>
							<ListItem>
								<ListItemText primary="lorem ipsum" />
							</ListItem>
							<ListItem>
								<ListItemText primary="lorem ipsum" />
							</ListItem>
						</List>
					}

					{
						settingValues.showFooter &&
						<CardFooter>
							some footer
						</CardFooter>
					}
				</Card>
			</div>
		</Fragment>
	);
}

export const CardPage = withOptions<ICardPageBaseProps>(CardPageBase, {
	showImage: false,
	showSubtitle: false,
	showFooter: false
}, 'CardPageBase');
