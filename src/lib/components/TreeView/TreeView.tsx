import React, { useEffect, useState } from "react";
import { ITreeNodeProps, TreeNode } from './TreeNode';

export interface ITreeNode {
	id: string;
	label: string;
	children?: Array<ITreeNode>;
}

export interface ITreeViewProps {
	data: Array<ITreeNode>;
	onSelect?: (selectedItems: Array<any>) => void;
	onExpand?: (id: string) => void;
	onCollapse?: (id: string) => void;
}

export const TreeView = (props: ITreeViewProps) => {

	const { data, onSelect, onExpand, onCollapse } = props;

	const [flattenData, setFlattenData] = useState<Array<any>>([]);
	const [expandedItems, setExpandedItems] = useState<Array<any>>([]);
	const [selectedItemIds, setSelectedItemIds] = useState<Array<string>>([]);

	const flattenDeep = (arr1: any, parentId = 0, level = 0) => {
		let result = [];
		result = arr1.reduce((acc: any, val: any) => {
			return (Array.isArray(val.children) ?
				acc.concat([
					{ id: val.id, label: val.label, level: level, hasChildren: true, parentId: parentId },
					...flattenDeep(val.children, val.id, level + 1)
				]) :
				acc.concat([{ id: val.id, label: val.label, level: level, hasChildren: false, parentId: parentId }]))
		}, []);
		return result;
	};

	useEffect(() => {
		setFlattenData(flattenDeep(data));
	}, [data]);

	const handleOnToggleExpand = (item: ITreeNodeProps) => {

		if (item.hasChildren) {
			let newExpandedItems = [...expandedItems];

			if (isExpanded(item.id)) {
				newExpandedItems = collapseRecursive(item, [...expandedItems]);
				onCollapse && onCollapse(item.id);
			} else {
				newExpandedItems.push(item);
				onExpand && onExpand(item.id);
			}

			setExpandedItems(newExpandedItems);
		}
	};

	const collapseRecursive = (item: any, expandedItems: Array<any>) => {
		let expandedItemIds = expandedItems.map(i => i.id);

		if (expandedItemIds.indexOf(item.id) >= 0) {
			expandedItems = expandedItems.filter(i => i.id !== item.id);
		}

		if (item.hasChildren) {
			let children = expandedItems.filter(child => child.parentId === item.id);
			for (let child of children) {
				expandedItems = collapseRecursive(child, expandedItems);
			}
		}

		return expandedItems;
	};

	const isExpanded = (id: string) => {
		return expandedItems.map(i => i.id).indexOf(id) >= 0;
	};

	const isItemVisible = (item: any) => {
		return item.parentId === 0 || (expandedItems.map(i => i.id).indexOf(item.parentId) >= 0);
	};

	const handleNodeClickSelect = (item: ITreeNodeProps) => {
		let newSelectedItems = [...selectedItemIds];
		if (isSelected(item.id)) {
			newSelectedItems = newSelectedItems.filter(id => id !== item.id);
			// remove from selected
		} else {
			newSelectedItems.push(item.id);
		}

		setSelectedItemIds(newSelectedItems);
		onSelect && onSelect(newSelectedItems);
	};

	const isSelected = (id: string) => {
		return selectedItemIds.indexOf(id) >= 0;
	};

	return (
		<ul className="treeview">

			{
				flattenData.map(item => {
					return isItemVisible(item) &&
						<TreeNode
							key={item.id}
							id={item.id}
							label={item.label}
							level={item.level}
							parentId={item.parentId}
							isExpanded={isExpanded(item.id)}
							isSelected={isSelected(item.id)}
							hasChildren={item.hasChildren}
							onToggleExpand={() => handleOnToggleExpand(item)}
							onClickSelect={() => handleNodeClickSelect(item)}
						/>
				})
			}

		</ul>
	);
}
