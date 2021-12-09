import React, { useEffect, useState } from "react";
import { ChevronDownSolidIcon, ChevronRightSolidIcon } from '../../assets/icons';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';
import styles from './TreeItem.module.scss';

export interface ITreeItemProps {
	nodeId: string;
	label: string;
	children?: any;
	className?: string;
	isExpanded?: boolean;
	isSelected?: boolean;
	isSelectable?: boolean;
	onToggleExpand?: (id: string) => void;
	onSelect?: (id: string, isSelected: boolean) => void;
}

export const TreeItem = (props: ITreeItemProps) => {

	const { nodeId, label, children, className, isExpanded, isSelected, isSelectable, onToggleExpand, onSelect } = props;

	const [_isExpanded, setIsExpanded] = useState<boolean>(false);
	const [_isSelected, setIsSelected] = useState<boolean>(false);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.treeItem);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	useEffect(() => {
		if (isExpanded !== undefined)
			setIsExpanded(isExpanded);
	}, [isExpanded]);

	useEffect(() => {
		if (isSelected !== undefined)
			setIsSelected(isSelected);
	}, [isSelected]);

	const handleOnToggleExpand = (nodeId: string) => {
		setIsExpanded(!_isExpanded);
		onToggleExpand && onToggleExpand(nodeId);
	}

	const handleOnSelect = (nodeId: string) => {
		setIsSelected(!_isSelected);
		onSelect && onSelect(nodeId, !_isSelected);
	}

	return (
		<li
			className={getCssClasses()}
			style={{ paddingLeft: `${(48 * (children ? 0 : 1))}px` }}
		>
			<div className="d-flex align-items-center">

				{children &&
					<IconButton onClick={() => handleOnToggleExpand(nodeId)} icon={!_isExpanded ? <ChevronRightSolidIcon /> : <ChevronDownSolidIcon />} />
				}

				{isSelectable &&
					<Checkbox checked={_isSelected} onChange={() => handleOnSelect(nodeId)} />
				}

				{label}
			</div>

			{children && _isExpanded ? <ul>{children}</ul> : null}
		</li>
	);
}
