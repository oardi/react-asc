import React, { Dispatch, useEffect, useState } from 'react';
import { COLOR, Column, Drawer, ExpansionPanel, FloatingActionButton, IControls, ITabOnChangeEvent, List, ListItem, ListItemText, Row, Tab, TabPanel, Tabs, useMobileDetect } from 'lib';
import { GearSolidIcon } from '..';
import { Highlight, Markdown } from '../../../shared';
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<P> {
	settingValues: P;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export function withOptions<T>(WrappedComponent: React.ComponentType<T & IShowcaseBaseProps<T>>, defaultSettingValues?: T, componentName?: string) {

	const HOC = ({ ...rest }) => {

		const [fileUrlUsage, setFileUrlUsage] = useState('');
		const [fileUrlDescription, setFileUrlDescription] = useState('');
		const [settingValues, setSettingValues] = useState<T>(defaultSettingValues as T || {} as T);
		const [settingsControls, setSettingsControls] = useState<IControls | undefined>();

		const [selectedTab, setSelectedTab] = useState<string>('tab1');
		const [selectedSettingsTab, setSelectedSettingsTab] = useState<string>('props');

		const { isMobile } = useMobileDetect();
		const [showSettingsDrawer, setShowSettingsDrawer] = useState<boolean>(true);
		useEffect(() => {
			setShowSettingsDrawer(!isMobile);
		}, [isMobile]);

		const onFormChange = (val: unknown) => {
			setSettingValues(val as T);
		}

		useEffect(() => {
			const fileName = componentName?.replace('PageBase', '');
			const newFileUrlUsage = `./showcase/${fileName?.toLowerCase()}.md`;
			setFileUrlUsage(newFileUrlUsage);
			const newFileUrlDescription = `./showcase/${fileName?.toLowerCase()}.description.md`;
			setFileUrlDescription(newFileUrlDescription);
		}, []);

		const handleChangeTab = (e: ITabOnChangeEvent) => {
			setSelectedTab(e.newValue);
		}

		const handleChangeSettingsTab = (e: ITabOnChangeEvent) => {
			setSelectedSettingsTab(e.newValue);
		}

		return (
			<Row direction="column">
				<Column>
					<ShowcaseExample>
						<Tabs fixed onChange={handleChangeTab} value={selectedTab}>
							<Tab value="tab1" label="Preview" />
							<Tab value="tab2" label="Usage" />
						</Tabs>

						<TabPanel value={selectedTab} index="tab1">
							<div className="p-1">
								<WrappedComponent
									{...rest as T}
									settingValues={settingValues}
									setSettingsControls={setSettingsControls}
								/>
							</div>
						</TabPanel>

						<TabPanel value={selectedTab} index="tab2">
							<Highlight url={fileUrlUsage} />
						</TabPanel>
					</ShowcaseExample>
				</Column>

				{isMobile &&
					<FloatingActionButton
						color={COLOR.light}
						icon={<GearSolidIcon />}
						onClick={() => setShowSettingsDrawer(!showSettingsDrawer)}
						fixed={true}
					/>
				}

				{showSettingsDrawer &&
					<Drawer
						permanent={!isMobile}
						position={'right'}
						shadow={true}
						target={document.querySelector('.main') as HTMLElement}
						onClickBackdrop={() => setShowSettingsDrawer(false)}
						style={{ maxWidth: '300px' }}
					>
						<Tabs
							color={COLOR.light}
							value={selectedSettingsTab}
							fixed={true}
							onChange={handleChangeSettingsTab}
						>
							<Tab value="props" label="Props" />
							<Tab value="description" label="Description" />
						</Tabs>

						<TabPanel value={selectedSettingsTab} index="props">
							{settingsControls && Object.keys(settingsControls).length > 0 &&
								<>
									<ShowcaseOptions
										controls={settingsControls}
										onFormChange={onFormChange}
									/>
									<ExpansionPanel
										header="Setted Props"
									>
										<pre>
											{JSON.stringify(settingValues, null, 4)}
										</pre>
									</ExpansionPanel>
								</>
							}

							{(!settingsControls || Object.keys(settingsControls).length === 0) &&
								<List>
									<ListItem>
										<ListItemText primary=" - no settings are listed - " />
									</ListItem>
								</List>
							}
						</TabPanel>
						<TabPanel className="p-1" value={selectedSettingsTab} index="description">
							<Markdown url={fileUrlDescription} />
						</TabPanel>
					</Drawer>
				}

			</Row>
		);

	};

	return HOC;
}
