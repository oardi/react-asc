import React, { Dispatch, useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Column, IControls, Row, Tab, TabPanel, Tabs } from '../../../lib';
import { Highlight } from "../../../shared";
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<T> {
	settingValues: T;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export const withOptions = <T,>(WrappedComponent: any, defaultSettingValues?: T, componentName?: string) => {

	const HOC = (props: any) => {

		const [fileUrl, setFileUrl] = useState('');
		const [settingValues, setSettingValues] = useState(defaultSettingValues ? defaultSettingValues : {});
		const [settingsControls, setSettingsControls] = useState<any>(null);

		const [value, setValue] = useState('tab1');

		const onFormChange = (val: any) => {
			setSettingValues(val);
		}

		useEffect(() => {
			const fileName = componentName?.replace('PageBase', '');
			const newFileUrl = `./showcase/${fileName?.toLowerCase()}.md`;
			setFileUrl(newFileUrl);
		}, []);

		const handleChange = (event: any, newValue: string) => {
			setValue(newValue);
		}

		// props passed to WrappedComponent
		return (
			<Row>

				<Column md={6}>
					<ShowcaseExample>
						<>

							<Tabs fill onChange={handleChange} selectedEventKey="tab1">
								<Tab value="tab1" label="Preview" />
								<Tab value="tab2" label="Usage" />
							</Tabs>

							<div>
								<TabPanel value={value} index="tab1">
									<div className="p-3">
										<WrappedComponent
											{...props}
											settingValues={settingValues}
											setSettingsControls={setSettingsControls}
										/>
									</div>
								</TabPanel>

								<TabPanel value={value} index="tab2">
									<Highlight url={fileUrl} />
								</TabPanel>
							</div>

						</>
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
