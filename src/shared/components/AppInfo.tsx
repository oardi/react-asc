import React, { useEffect, useState } from 'react';
import { COLOR, IconButton, modalService } from '../../lib';
import { InfoSolidSvg } from '../../showcase';
import changelogMd from '../../../changelog.md';
import * as marked from 'marked'

export const AppInfo = () => {

	const [changelog, setChangelog] = useState<string>();

	useEffect(() => {
		setChangelog(marked(changelogMd));
	}, []);

	const handleClick = () => {
		modalService.show('Changelog', <div dangerouslySetInnerHTML={{ __html: changelog }}></div>, { isDismissable: true });
	};

	return (
		<IconButton
			color={COLOR.light}
			icon={<InfoSolidSvg />}
			onClick={handleClick}
		/>
	);
}
