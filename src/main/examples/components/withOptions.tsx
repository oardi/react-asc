import { Card, CardBody, CardTitle, Column, IControls, ITabOnChangeEvent, Row, Tab, TabPanel, Tabs } from "lib";
import React, { Dispatch, useEffect, useState } from "react";
import { Highlight } from "../../../shared";
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<P> {
	settingValues: P;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export function withOptions<T>(WrappedComponent: React.ComponentType<T & IShowcaseBaseProps<T>>, defaultSettingValues?: T, componentName?: string) {

	const HOC = ({...rest}) => {

		const [fileUrl, setFileUrl] = useState('');
		const [settingValues, setSettingValues] = useState<T>(defaultSettingValues as T);
		const [settingsControls, setSettingsControls] = useState<IControls | undefined>();

		const [value, setValue] = useState<string>('tab1');

		const onFormChange = (val: unknown) => {
			setSettingValues(val as T);
		}

		useEffect(() => {
			const fileName = componentName?.replace('PageBase', '');
			const newFileUrl = `./showcase/${fileName?.toLowerCase()}.md`;
			setFileUrl(newFileUrl);
		}, []);

		const handleChange = (e: ITabOnChangeEvent) => {
			setValue(e.newValue);
		}

		// props passed to WrappedComponent
		return (
			<Row>

				<Column md={6}>
					<ShowcaseExample>
						<>

							<Tabs fixed onChange={handleChange} value={value}>
								<Tab value="tab1" label="Preview" />
								<Tab value="tab2" label="Usage" />
							</Tabs>

							<div>
								<TabPanel value={value} index="tab1">
									<div className="p-3">
										<WrappedComponent
											{...rest as T}
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
}
