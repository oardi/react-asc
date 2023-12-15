import { Button, Card, CardBody, CssTransition } from 'lib';
import { useState } from 'react';
import { withOptions } from './components';

export const CssTransitionPageBase = (): JSX.Element => {
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

export const CssTransitionPage: () => JSX.Element = withOptions(CssTransitionPageBase, {}, 'CssTransitionPageBase');
