import React, { Fragment, useEffect } from 'react';
import { ILinkProps, Link } from '../../lib';
import { IShowcaseBaseProps, withOptions } from './components';

export const LinkPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ILinkProps>) => {

	useEffect(() => {
		setSettingsControls({
			// isHoverable: new FormControl(settingValues.isHoverable, [], 'checkbox', { label: 'isHoverable' }),
		});
	}, []);

	return (
		<Fragment>

			<Link>
				some link text
			</Link>

		</Fragment>
	);
}

export const LinkPage = withOptions<ILinkProps>(LinkPageBase, {

}, 'LinkPageBase');
