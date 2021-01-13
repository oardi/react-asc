import React from 'react';
import { AppBar, COLOR, homeSolidSvg, IconButton } from '../../lib';
import { withOptions } from './components';

const AppBarBase = () => {
	return (
		<div>
			<AppBar>
				<div className="navbar-brand w-100">Navbar</div>
				<IconButton color={COLOR.light} icon={homeSolidSvg} />
			</AppBar>
		</div>
	);
}

export const AppBarPage = withOptions(AppBarBase);
