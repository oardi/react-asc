import React, { useEffect, useState } from 'react';
import { FormControl, Button, Backdrop, IBackdropProps } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const BackdropPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IBackdropProps>) => {

	useEffect(() => {
		setSettingsControls({
			isTransparent: new FormControl(settingValues.isTransparent, [], 'checkbox', { label: 'isTransparent' })
		});
	}, []);

	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={() => setIsShow(!isShow)}>
				{isShow ? 'hide' : 'show'}
			</Button>

			<div id="backdrop-container" style={{ height: '300px', position: 'relative' }}>
				show backdrop
			</div>

			{isShow &&
				<Backdrop
					isTransparent={settingValues.isTransparent}
					target={document.body.querySelector('#backdrop-container') as HTMLElement}
				/>
			}
		</>
	);
};

export const BackdropPage = withOptions<IBackdropProps>(BackdropPageBase, {
	isTransparent: false
}, 'BackdropPageBase');
