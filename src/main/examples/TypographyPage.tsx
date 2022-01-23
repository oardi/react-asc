import React, { Fragment, useEffect } from 'react';
import { ITypographyProps, Typography } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const TypographyPageBase = ({ setSettingsControls }: IShowcaseBaseProps<ITypographyProps>) => {

	useEffect(() => {
		setSettingsControls({});
	}, []);

	return (
		<Fragment>
			<Typography as="h1">Heading1</Typography>
			<Typography as="h2">Heading1</Typography>
			<Typography as="h3">Heading1</Typography>
			<Typography as="h4">Heading1</Typography>
			<Typography as="h5">Heading1</Typography>
			<Typography as="h6">Heading1</Typography>

			<Typography>some span text</Typography>
		</Fragment>
	);
}

export const TypographyPage = withOptions(TypographyPageBase,
	undefined,
	'TypographyPageBase'
);
