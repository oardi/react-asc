import { useState } from 'react';
import { Button, Card, CardBody, CssTransition } from 'src/lib';
import { withOptions } from './components';

export const CssTransitionPageBase = (): React.JSX.Element => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={(): void => setIsShow(!isShow)}>toggle css transition</Button>

			<CssTransition show={isShow} className="fade">
				<Card className="mt-1">
					<CardBody>Some Card Text</CardBody>
				</Card>
			</CssTransition>
		</>
	);
};

export const CssTransitionPage: () => React.JSX.Element = withOptions(CssTransitionPageBase, {}, 'CssTransitionPageBase');
