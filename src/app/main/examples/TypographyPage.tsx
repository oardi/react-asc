import { useEffect } from 'react';
import type { ITypographyProps } from 'src/lib';
import { FormControl, Typography } from 'src/lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const TypographyPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITypographyProps>): React.JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			wrap: new FormControl(settingValues.wrap, [], 'checkbox', { label: 'wrap' }),
		});
	}, []);

	return (
		<div className="d-flex flex-column">
			<Typography as="h2">Interactive</Typography>
			<Typography wrap={settingValues.wrap}>
				lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
			</Typography>

			<Typography className="mt-2" as="h2">
				Examples
			</Typography>
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
		</div>
	);
};

export const TypographyPage: () => React.JSX.Element = withOptions(TypographyPageBase, undefined, 'TypographyPageBase');
