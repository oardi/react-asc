import React, { useState } from 'react';
import { TreeView } from '../../lib';
import { withOptions } from './components';

const TreeViewPageBase = () => {
	const [selectedIds, setSelectedIds] = useState([]);

	const handleSelect = (ids) => {
		setSelectedIds(ids);
	}

	return (
		<div>
			<TreeView
				data={[
					{ id: 1, name: 'A' },
					{
						id: 2, name: 'B', children: [
							{
								id: 3, name: 'B11', children: [
									{ id: 4, name: 'B21' }
								]
							}
						]
					},
					{ id: 5, name: 'C' },
					{
						id: 6, name: 'D', children: [
							{ id: 7, name: 'D11' },
							{ id: 8, name: 'D12' }
						]
					}
				]}
				onSelect={(items) => handleSelect(items)}
			/>

			Selected Ids:
			<pre>
				<code>{JSON.stringify(selectedIds, null, 4)}</code>
			</pre>
		</div>
	);
}

export const TreeViewPage = withOptions(TreeViewPageBase);
