import React, { useState } from 'react';
import { snackbarService, TreeItem, TreeView } from '../../lib';
import { withOptions } from './components';

const TreeViewPageBase = () => {
	const [selectedIds, setSelectedIds] = useState<Array<string>>([]);

	const handleOnSelect = (id: string, isSelected: boolean) => {
		let oldIds: Array<string> = selectedIds;
		if (isSelected) {
			oldIds = oldIds.concat([id]);
			setSelectedIds(oldIds);
			isSelected && snackbarService.show(id);
		} else {
			oldIds = oldIds.filter(oldId => oldId !== id);
			setSelectedIds(oldIds);
		}
	}

	return (
		<>
			<TreeView>
				<TreeItem nodeId="1" label="some text" onSelect={handleOnSelect}>
					<TreeItem nodeId="11" label="some text" onSelect={handleOnSelect} />
					<TreeItem nodeId="12" label="some text" onSelect={handleOnSelect} />
					<TreeItem nodeId="13" label="some text" onSelect={handleOnSelect}>
						<TreeItem nodeId="111" label="some text" onSelect={handleOnSelect} />
						<TreeItem nodeId="112" label="some text" onSelect={handleOnSelect} />
					</TreeItem>
				</TreeItem>
				<TreeItem nodeId="2" label="some text" onSelect={handleOnSelect} />
				<TreeItem nodeId="3" label="some text" onSelect={handleOnSelect} />
			</TreeView>

			Selected Ids:
			<pre>
				<code>{JSON.stringify(selectedIds, null, 4)}</code>
			</pre>
		</>
	);
}

export const TreeViewPage = withOptions(TreeViewPageBase, null, 'TreeViewPageBase');
