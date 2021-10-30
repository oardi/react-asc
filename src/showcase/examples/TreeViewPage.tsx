import React, { useState } from 'react';
import { TreeView } from '../../lib';
import { withOptions } from './components';

const TreeViewPageBase = () => {
	const [selectedIds, setSelectedIds] = useState<Array<number>>([]);

	const handleSelect = (ids: Array<number>) => {
		setSelectedIds(ids);
	}

	return (
		<div>
			<h3>Alpha</h3>

			<TreeView
				data={[
					{ id: 1, label: 'A' },
					{
						id: 2, label: 'B', children: [
							{
								id: 3, label: 'B11', children: [
									{ id: 4, label: 'B21' }
								]
							}
						]
					},
					{ id: 5, label: 'C' },
					{
						id: 6, label: 'D', children: [
							{ id: 7, label: 'D11' },
							{ id: 8, label: 'D12' }
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

export const TreeViewPage = withOptions(TreeViewPageBase, null, 'TreeViewPageBase');
