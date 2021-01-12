import React, { Suspense } from "react";
import { render } from "react-dom";
import { HashRouter as Router } from "react-router-dom";

import { AppContainer } from './AppContainer';
import "./style.scss";

render(
	<Suspense fallback={<div>Loading...</div>}>
		<Router>
			<AppContainer />
		</Router>
	</Suspense>,
	document.getElementById("app"),
);

if (module.hot) {
	module.hot.accept();
}
