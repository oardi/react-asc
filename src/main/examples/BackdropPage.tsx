import React, { useEffect, useState } from 'react';
import type { IBackdropProps } from 'lib';
import { FormControl, Button, Backdrop } from 'lib';
import type { IShowcaseBaseProps} from './components';
import { withOptions } from './components';

const BackdropPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IBackdropProps>): JSX.Element => {

	useEffect(() => {
		setSettingsControls({
			isTransparent: new FormControl(settingValues.isTransparent, [], 'checkbox', { label: 'isTransparent' })
		});
	}, []);

	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={(): void => setIsShow(!isShow)}>
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

export const BackdropPage: () => JSX.Element = withOptions<IBackdropProps>(BackdropPageBase, {
	isTransparent: false
}, 'BackdropPageBase');
