import React, { Fragment, useEffect } from 'react';
import { Button, ButtonGroup, IButtonGroupProps } from '../../lib';
import { withOptions } from './components';
import { IShowcaseBaseProps } from './components';

const ButtonGroupPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<IButtonGroupProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	return (
		<Fragment>

			<ButtonGroup>
				<Button>some button</Button>
				<Button>some button</Button>
				<Button>some button</Button>
			</ButtonGroup>

		</Fragment>
	);
}

export const ButtonGroupPage = withOptions<IButtonGroupProps>(ButtonGroupPageBase, {
}, 'ButtonGroupPageBase');
