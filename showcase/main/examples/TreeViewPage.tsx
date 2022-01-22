import React, { useEffect, useState } from 'react';
import { FormControl, ITreeItemProps, snackbarService, TreeItem, TreeView, Typography } from '../../../src';
import { IShowcaseBaseProps, withOptions } from './components';

const TreeViewPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITreeItemProps>) => {

	useEffect(() => {
		setSettingsControls({
			isSelectable: new FormControl(settingValues.isSelectable, [], 'checkbox', { label: 'isSelectable' }),
		});
	}, []);

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
				<TreeItem nodeId="1" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable}>
					<TreeItem nodeId="11" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					<TreeItem nodeId="12" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					<TreeItem nodeId="13" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable}>
						<TreeItem nodeId="111" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
						<TreeItem nodeId="112" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					</TreeItem>
				</TreeItem>
				<TreeItem nodeId="2" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
				<TreeItem nodeId="3" label="some text" onSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
			</TreeView>

			{settingValues.isSelectable &&
				<>
					<Typography>
						Selected Ids
					</Typography>
					<pre>
						<code>{JSON.stringify(selectedIds, null, 4)}</code>
					</pre>
				</>
			}
		</>
	);
}

export const TreeViewPage = withOptions(TreeViewPageBase, null, 'TreeViewPageBase');
