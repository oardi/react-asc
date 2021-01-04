import React from "react";

import { chevronDownSolidSvg, chevronRightSolidSvg } from '../../assets/icons';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';

export const TreeNode = ({
	id,
	name,
	level,
	parentId,
	hasChildren,
	isExpanded,
	isSelected,
	onClick,
	onClickSelect
}) => {

	return (
		<li
			className="tree-node"
			style={{ paddingLeft: `${40 * level}px` }}
		>

			{hasChildren ?
				<IconButton className="btn-toggle" onClick={() => onClick(id)} icon={!isExpanded ? chevronRightSolidSvg : chevronDownSolidSvg} />
				:
				<button className="btn-toggle"></button>
			}

			<Checkbox checked={isSelected} onChange={() => onClickSelect(id)} />

			ID: {id}, {name}, LEVEL: {level}, PARENT: {parentId}
		</li>
	);
}
