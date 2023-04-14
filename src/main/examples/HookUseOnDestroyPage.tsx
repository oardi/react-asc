import { Button, snackbarService, useOnDestroy } from 'lib';
import { useState } from 'react';
import { withOptions } from './components';

const MyTest = (): JSX.Element => {
	useOnDestroy(() => {
		void snackbarService.show('Component unmounted');
	});

	return <div>some text</div>;
};

const HookUseOnDestroyPageBase = (): JSX.Element => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<Button onClick={(): void => setIsVisible(!isVisible)}>toggle</Button>

			{isVisible && <MyTest />}
		</>
	);
};

export const HookUseOnDestroyPage: () => JSX.Element = withOptions(HookUseOnDestroyPageBase, {}, 'HookUseOnDestroyPageBase');
