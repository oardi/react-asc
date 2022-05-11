import React, { useState } from 'react';
import { Button, Card, CardBody, CssTransition } from 'lib';
import { withOptions } from './components';

export const CssTransitionPageBase = () => {

	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<>
			<Button onClick={() => setIsShow(!isShow)}>
				toggle css transition
			</Button>

			<CssTransition show={isShow} className="fade">
				<Card className='mt-1'>
					<CardBody>
						Some Card Text
					</CardBody>
				</Card>
			</CssTransition>
		</>
	);
}

export const CssTransitionPage = withOptions(CssTransitionPageBase, {}, 'CssTransitionPageBase');
