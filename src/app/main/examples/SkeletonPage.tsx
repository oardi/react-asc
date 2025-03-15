import { SkeletonAvatar, SkeletonFooter, SkeletonImage, SkeletonText } from 'src/lib';
import { withOptions } from './components';

const SkeletonPageBase = (): React.JSX.Element => {
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

export const SkeletonPage: () => React.JSX.Element = withOptions<unknown>(SkeletonPageBase, null, 'SkeletonPageBase');
