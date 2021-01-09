import React, { Dispatch, useState } from "react";
import { Card, CardBody, CardTitle, IControls } from '../../../lib';
import { ShowcaseExample } from './ShowcaseExample';
import { ShowcaseOptions } from './ShowcaseOptions';

export interface IShowcaseBaseProps<T> {
	settingValues: T;
	setSettingsControls: Dispatch<IControls>; // TODO add types
}

// with template inheritance
// TODO -> any to type
export const withOptions = <T,>(WrappedComponent, defaultSettingValues?: T) => {

	const HOC = (props) => {
		const [settingValues, setSettingValues] = useState(defaultSettingValues ? defaultSettingValues : {});
		const [settingsControls, setSettingsControls] = useState(null);

		const onFormChange = (val) => {
			setSettingValues(val);
		}

		// props passed to WrappedComponent
		return (
			<div className="row pt-2 pb-2">

				<div className="col-12 col-md-6">
					<ShowcaseExample>
						<WrappedComponent
							{...props}
							settingValues={settingValues}
							setSettingsControls={setSettingsControls}
						/>
					</ShowcaseExample>

					{settingValues &&
						<Card className="mt-2">
							<CardBody>
								<CardTitle>Setted Props</CardTitle>
								<pre>
									{JSON.stringify(settingValues, null, 4)}
								</pre>
							</CardBody>
						</Card>
					}
				</div>

				<div className="col-12 col-md-6 mt-2 mt-sm-0">
					<ShowcaseOptions
						controls={settingsControls}
						onFormChange={onFormChange}
					/>
				</div>

			</div>
		);
	};

	return HOC;
};
