import { useState } from 'react';
import { Button, snackbarService, useOnDestroy } from 'src/lib';
import { withOptions } from './components';

const MyTest = (): React.JSX.Element => {
	useOnDestroy(() => {
		void snackbarService.show('Component unmounted');
	});

	return <div>some text</div>;
};

const HookUseOnDestroyPageBase = (): React.JSX.Element => {
	const [isVisible, setIsVisible] = useState(true);

	return (
		<>
			<Button onClick={(): void => setIsVisible(!isVisible)}>toggle</Button>

			{isVisible && <MyTest />}
		</>
	);
};

export const HookUseOnDestroyPage: () => React.JSX.Element = withOptions(HookUseOnDestroyPageBase, {}, 'HookUseOnDestroyPageBase');
