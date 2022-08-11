import React, { useState } from 'react';
import { Button, snackbarService, useOnDestroy } from 'lib';
import { withOptions } from './components';

const MyTest = () => {

	useOnDestroy(() => {
		snackbarService.show('Component unmounted');
	});

	return (
		<div>some text</div>
	);
};

const HookUseOnDestroyPageBase = () => {

	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<Button onClick={() => setIsVisible(!isVisible)}>
				toggle
			</Button>

			{isVisible &&
				<MyTest />
			}
		</>
	);
};

export const HookUseOnDestroyPage: () => JSX.Element = withOptions(HookUseOnDestroyPageBase, {
}, 'HookUseOnDestroyPageBase');
