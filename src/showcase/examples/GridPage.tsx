import React, { Fragment } from 'react';
import { Column, Row } from '../../lib';
import { withOptions } from './components';

const GridPageBase = () => {
	return (
		<Fragment>
			<Row>
				<Column xs="12" md="4">col 1</Column>
				<Column xs="6" md="4">col 2</Column>
				<Column xs="6" md="4">col 3</Column>
			</Row>
		</Fragment>
	);
}

export const GridPage = withOptions(GridPageBase);
