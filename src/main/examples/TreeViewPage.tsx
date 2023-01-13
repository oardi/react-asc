import React, { useEffect, useState } from 'react';
import type { ITreeItemProps } from 'lib';
import { FormControl, snackbarService, TreeItem, TreeView, Typography } from 'lib';
import type { IShowcaseBaseProps } from './components';
import { withOptions } from './components';

const TreeViewPageBase = ({ settingValues, setSettingsControls }: IShowcaseBaseProps<ITreeItemProps>): JSX.Element => {
	useEffect(() => {
		setSettingsControls({
			isSelectable: new FormControl(settingValues.isSelectable, [], 'checkbox', { label: 'isSelectable' }),
		});
	}, []);

	const [selectedIds, setSelectedIds] = useState<string[]>([]);

	const handleOnSelect = (e: { id: string; isSelected: boolean }): void => {
		let oldIds: string[] = selectedIds;
		if (e.isSelected) {
			oldIds = oldIds.concat([e.id]);
			setSelectedIds(oldIds);
			e.isSelected && snackbarService.show(e.id);
		} else {
			oldIds = oldIds.filter(oldId => oldId !== e.id);
			setSelectedIds(oldIds);
		}
	};

	return (
		<>
			<TreeView>
				<TreeItem nodeId="1" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable}>
					<TreeItem nodeId="11" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					<TreeItem nodeId="12" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					<TreeItem nodeId="13" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable}>
						<TreeItem nodeId="111" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
						<TreeItem nodeId="112" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
					</TreeItem>
				</TreeItem>
				<TreeItem nodeId="2" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
				<TreeItem nodeId="3" label="some text" onItemSelect={handleOnSelect} isSelectable={settingValues.isSelectable} />
			</TreeView>

			{settingValues.isSelectable && (
				<>
					<Typography>Selected Ids</Typography>
					<pre>
						<code>{JSON.stringify(selectedIds, null)}</code>
					</pre>
				</>
			)}
		</>
	);
};

export const TreeViewPage: () => JSX.Element = withOptions(
	TreeViewPageBase,
	{
		isSelectable: false,
	},
	'TreeViewPageBase'
);
