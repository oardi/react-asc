import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import { COLOR, IconButton } from '../../lib';
import { infoSolidSvg } from '../../showcase';
import changelogMd from '../../../changelog.md';
import * as marked from 'marked'

export const AppInfo = () => {

	const [changelog, setChangelog] = useState<string>();
	const { modalService } = useContext(AppContext);

	useEffect(() => {
		setChangelog(marked(changelogMd));
	}, []);

	const handleClick = () => {
		modalService.show('Changelog', <div dangerouslySetInnerHTML={{ __html: changelog }}></div>, { isDismissable: true });
	};

	return(
		<IconButton
			color={COLOR.light}
			icon={infoSolidSvg}
			onClick={handleClick}
		/>
	);
}
