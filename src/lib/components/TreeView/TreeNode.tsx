import React from "react";

import { ChevronDownSolidIcon, ChevronRightSolidIcon } from '../../assets/icons';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';

// TODO props
export const TreeNode = (props: any) => {

	const { id, name, level, parentId, hasChildren, isExpanded, isSelected, onClick, onClickSelect } = props;

	return (
		<li
			className="tree-node"
			style={{ paddingLeft: `${40 * level}px` }}
		>

			{hasChildren ?
				<IconButton className="btn-toggle" onClick={() => onClick(id)} icon={!isExpanded ? <ChevronRightSolidIcon /> : <ChevronDownSolidIcon />} />
				:
				<button className="btn-toggle"></button>
			}

			<Checkbox checked={isSelected} onChange={() => onClickSelect(id)} />

			ID: {id}, {name}, LEVEL: {level}, PARENT: {parentId}
		</li>
	);
}
