import { SkeletonAvatar, SkeletonFooter, SkeletonImage, SkeletonText } from 'lib';
import { withOptions } from './components';

const SkeletonPageBase = (): JSX.Element => {
	return (
		<>
			<SkeletonAvatar />
			<SkeletonText className="mt-1" />
			<SkeletonText />
			<SkeletonImage />
			<SkeletonFooter />
		</>
	);
};

export const SkeletonPage: () => JSX.Element = withOptions<unknown>(SkeletonPageBase, null, 'SkeletonPageBase');
