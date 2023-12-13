import type { IControls } from 'lib';
import {
	Color,
	Column,
	Drawer,
	ExpansionPanel,
	FloatingActionButton,
	List,
	ListItem,
	ListItemText,
	Row,
	Tab,
	TabPanel,
	Tabs,
	useMobileDetect,
} from 'lib';
import type { Dispatch } from 'react';
import React, { useEffect, useState } from 'react';
import { GearSolidIcon } from '..';
import { Highlight, Markdown } from '../../../shared';
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<P> {
	settingValues: P;
	setSettingsControls: Dispatch<IControls>;
}

// with template inheritance
export function withOptions<T>(
	WrappedComponent: React.ComponentType<T & IShowcaseBaseProps<T>>,
	defaultSettingValues?: T,
	componentName?: string
): () => JSX.Element {
	const HOC: React.ComponentType<T & IShowcaseBaseProps<T>> = ({ ...rest }) => {
		const [fileUrlUsage, setFileUrlUsage] = useState('');
		const [fileUrlDescription, setFileUrlDescription] = useState('');
		const [settingValues, setSettingValues] = useState<T>((defaultSettingValues as T) || ({} as T));
		const [settingsControls, setSettingsControls] = useState<IControls | undefined>();

		const [selectedTab, setSelectedTab] = useState<string>('options-tab-preview');
		const [selectedSettingsTab, setSelectedSettingsTab] = useState<string>('options-props');

		const { isMobile } = useMobileDetect();
		const [showSettingsDrawer, setShowSettingsDrawer] = useState<boolean>(true);
		useEffect(() => {
			setShowSettingsDrawer(!isMobile);
		}, [isMobile]);

		const onFormChange = (val: unknown): void => {
			setSettingValues(val as T);
		};

		useEffect(() => {
			const fileName: string | undefined = componentName?.replace('PageBase', '');
			const newFileUrlUsage: string = `/showcase/${fileName?.toLowerCase()}.md`;
			setFileUrlUsage(newFileUrlUsage);
			const newFileUrlDescription: string = `/showcase/${fileName?.toLowerCase()}.description.md`;
			setFileUrlDescription(newFileUrlDescription);
		}, []);

		const handleChangeTab = (val: string): void => {
			setSelectedTab(val);
		};

		const handleChangeSettingsTab = (val: string): void => {
			setSelectedSettingsTab(val);
		};

		return (
			<Row direction="column">
				<Column>
					<ShowcaseExample>
						<Tabs fixed onChange={handleChangeTab} value={selectedTab}>
							<Tab value="options-tab-preview" label="Preview" />
							<Tab value="options-tab-usage" label="Usage" />
						</Tabs>

						<TabPanel value={selectedTab} index="options-tab-preview">
							<div className="p-1">
								<WrappedComponent
									{...(rest as T)}
									settingValues={settingValues}
									setSettingsControls={setSettingsControls}
								/>
							</div>
						</TabPanel>

						<TabPanel value={selectedTab} index="options-tab-usage">
							<Highlight url={fileUrlUsage} />
						</TabPanel>
					</ShowcaseExample>
				</Column>

				{isMobile && (
					<FloatingActionButton
						color={Color.light}
						icon={<GearSolidIcon />}
						onClick={(): void => setShowSettingsDrawer(!showSettingsDrawer)}
						fixed={true}
					/>
				)}

				{showSettingsDrawer && (
					<Drawer
						permanent={!isMobile}
						position={'right'}
						shadow={true}
						target={document.querySelector('.main') as HTMLElement}
						onClickBackdrop={(): void => setShowSettingsDrawer(false)}
						style={{ maxWidth: '300px' }}>
						<Tabs color={Color.light} value={selectedSettingsTab} fixed={true} onChange={handleChangeSettingsTab}>
							<Tab value="options-props" label="Props" />
							<Tab value="options-description" label="Description" />
						</Tabs>

						<TabPanel value={selectedSettingsTab} index="options-props">
							{settingsControls && Object.keys(settingsControls).length > 0 && (
								<>
									<ShowcaseOptions controls={settingsControls} onFormChange={onFormChange} />
									<ExpansionPanel header="Setted Props">
										<pre>{JSON.stringify(settingValues, null)}</pre>
									</ExpansionPanel>
								</>
							)}

							{(!settingsControls || Object.keys(settingsControls).length === 0) && (
								<List>
									<ListItem>
										<ListItemText primary=" - no settings are listed - " />
									</ListItem>
								</List>
							)}
						</TabPanel>
						<TabPanel className="p-1" value={selectedSettingsTab} index="options-description">
							<Markdown url={fileUrlDescription} />
						</TabPanel>
					</Drawer>
				)}
			</Row>
		);
	};

	return HOC as () => JSX.Element;
}
