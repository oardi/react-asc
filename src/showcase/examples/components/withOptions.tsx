import React, { Dispatch, useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Column, IControls, Row, Tab, Tabset } from '../../../lib';
import { Highlight } from "../../../shared";
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<T> {
	settingValues: T;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export const withOptions = <T,>(WrappedComponent: any, defaultSettingValues?: T) => {

	const HOC = (props: any) => {

		const [fileUrl, setFileUrl] = useState('');
		const [settingValues, setSettingValues] = useState(defaultSettingValues ? defaultSettingValues : {});
		const [settingsControls, setSettingsControls] = useState<any>(null);

		const onFormChange = (val: any) => {
			setSettingValues(val);
		}

		useEffect(() => {
			const fileName = WrappedComponent.name.replace('PageBase','');
			const newFileUrl = `./showcase/${fileName.toLowerCase()}.md`;
			setFileUrl(newFileUrl);
		}, []);

		// props passed to WrappedComponent
		return (
			<Row>

				<Column md={6}>
					<ShowcaseExample>

						<Tabset>
							<Tab eventKey="tab1" title="Preview">
								<WrappedComponent
									{...props}
									settingValues={settingValues}
									setSettingsControls={setSettingsControls}
								/>
							</Tab>
							<Tab eventKey="tab2" title="Usage">
								<Highlight url={fileUrl} />
							</Tab>
						</Tabset>

					</ShowcaseExample>

					{settingValues && Object.keys(settingValues).length > 0 &&
						<Card className="mt-3">
							<CardBody>
								<CardTitle>Setted Props</CardTitle>
								<pre>
									{JSON.stringify(settingValues, null, 4)}
								</pre>
							</CardBody>
						</Card>
					}
				</Column>

				{settingsControls && Object.keys(settingsControls).length > 0 &&
					<Column md={6} className="mt-3 mt-md-0">
						<ShowcaseOptions
							controls={settingsControls}
							onFormChange={onFormChange}
						/>
					</Column>
				}

			</Row>
		);
	};

	return HOC;
};
