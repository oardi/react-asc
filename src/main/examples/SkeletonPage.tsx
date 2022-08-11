import React from 'react';
import { SkeletonAvatar, SkeletonFooter, SkeletonImage, SkeletonText } from 'lib';
import { withOptions } from './components';

const SkeletonPageBase = () => {
	return (
		<>
			<SkeletonAvatar />
			<SkeletonText className='mt-1' />
			<SkeletonText />
			<SkeletonImage />
			<SkeletonFooter />
		</>
	);
};

export const SkeletonPage: () => JSX.Element = withOptions<unknown>(SkeletonPageBase, null, 'SkeletonPageBase');
