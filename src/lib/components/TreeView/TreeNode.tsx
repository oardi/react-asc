import React from "react";

import { ChevronDownSolidIcon, ChevronRightSolidIcon } from '../../assets/icons';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';

export interface ITreeNodeProps {
	id: string;
	label: string;
	level: number;
	parentId: string;
	hasChildren: boolean;
	isExpanded: boolean;
	isSelected: boolean;
	onToggleExpand: (id: string) => void;
	onClickSelect: (id: string) => void;
}

export const TreeNode = (props: ITreeNodeProps) => {

	const { id, label, level, hasChildren, isExpanded, isSelected, onToggleExpand, onClickSelect } = props;

	return (
		<li
			className="tree-node"
			style={{ paddingLeft: `${(48 * level) + (hasChildren ? 0 : 1) * 48}px` }}
		>

			{hasChildren &&
				<IconButton onClick={() => onToggleExpand(id)} icon={!isExpanded ? <ChevronRightSolidIcon /> : <ChevronDownSolidIcon />} />
			}

			<Checkbox checked={isSelected} onChange={() => onClickSelect(id)} />

			{label}
		</li>
	);
}
