import React, { useState } from 'react';
import { snackbarService, TreeView } from '../../lib';
import { withOptions } from './components';

const TreeViewPageBase = () => {
	const [selectedIds, setSelectedIds] = useState<Array<number>>([]);

	const handleSelect = (ids: Array<number>) => {
		setSelectedIds(ids);
		snackbarService.show('on select');
	}

	const handleOnExpand = (id: string) => {
		snackbarService.show(`Id ${id} expanded`);
	}

	const handleOnCollapse = (id: string) => {
		snackbarService.show(`Id ${id} collapsed`);
	}

	return (
		<>
			<TreeView
				data={[
					{ id: '1', label: 'A' },
					{
						id: '2', label: 'B', children: [
							{
								id: '3', label: 'B11', children: [
									{ id: '4', label: 'B21' }
								]
							}
						]
					},
					{ id: '5', label: 'C' },
					{
						id: '6', label: 'D', children: [
							{ id: '7', label: 'D11' },
							{ id: '8', label: 'D12' }
						]
					}
				]}
				onSelect={handleSelect}
				onExpand={handleOnExpand}
				onCollapse={handleOnCollapse}
			/>

			Selected Ids:
			<pre>
				<code>{JSON.stringify(selectedIds, null, 4)}</code>
			</pre>
		</>
	);
}

export const TreeViewPage = withOptions(TreeViewPageBase, null, 'TreeViewPageBase');
