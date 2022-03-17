import React, { useEffect } from 'react';
import { ITypographyProps, Typography } from 'lib';
import { IShowcaseBaseProps, withOptions } from './components';

const TypographyPageBase = ({ setSettingsControls }: IShowcaseBaseProps<ITypographyProps>) => {

	useEffect(() => {
		setSettingsControls({});
	}, []);

	return (
		<>
			<Typography as="h1">Heading 1</Typography>
			<Typography as="h2">Heading 2</Typography>
			<Typography as="h3">Heading 3</Typography>
			<Typography as="h4">Heading 4</Typography>
			<Typography as="h5">Heading 5</Typography>
			<Typography as="h6">Heading 6</Typography>

			<div>
				<Typography className="overline">overline</Typography>
			</div>
			<div>
				<Typography className="uppercase">uppercase</Typography>
			</div>
			<div>
				<Typography className="body2">body2</Typography>
			</div>
		</>
	);
}

export const TypographyPage = withOptions(TypographyPageBase,
	undefined,
	'TypographyPageBase'
);
