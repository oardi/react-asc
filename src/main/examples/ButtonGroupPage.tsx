import React, { Fragment, useEffect } from 'react';
import { Button, ButtonGroup, IButtonGroupProps, snackbarService } from 'lib';
import { withOptions } from './components';
import { IShowcaseBaseProps } from './components';

const ButtonGroupPageBase = ({ setSettingsControls }: IShowcaseBaseProps<IButtonGroupProps>) => {

	useEffect(() => {
		setSettingsControls({
		});
	}, []);

	const handleClick = () => {
		snackbarService.show('Button clicked');
	}

	return (
		<Fragment>

			<ButtonGroup>
				<Button onClick={handleClick}>some button</Button>
				<Button onClick={handleClick}>some button</Button>
				<Button onClick={handleClick}>some button</Button>
			</ButtonGroup>

		</Fragment>
	);
}

export const ButtonGroupPage = withOptions<IButtonGroupProps>(ButtonGroupPageBase, {
}, 'ButtonGroupPageBase');
