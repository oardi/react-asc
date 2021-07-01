import React, { Fragment, useEffect, useState } from 'react';
import { FormControl, IBadgeProps, Button, Backdrop } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

const BackdropPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IBadgeProps>) => {

	useEffect(() => {
		setSettingsControls({
			content: new FormControl(settingValues.content, [], 'text', { label: 'content' })
		});
	}, []);

	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<Fragment>
			<Button onClick={() => setIsShow(!isShow)}>
				{isShow ? 'hide' : 'show'}
			</Button>

			<div id="backdrop-container" style={{ height: '300px', position: 'relative' }}>
				show backdrop
			</div>

			{isShow &&
				<Backdrop target={document.body.querySelector('#backdrop-container') as HTMLElement} />
			}
		</Fragment>
	);
}

export const BackdropPage = withOptions<IBadgeProps>(BackdropPageBase, {}, 'BackdropPageBase');
