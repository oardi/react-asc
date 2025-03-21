import React, { useEffect, useState } from 'react';
import { ChevronDownSolidIcon, ChevronRightSolidIcon } from '../../icons';
import { Checkbox } from '../Checkbox';
import { IconButton } from '../IconButton';
import styles from './TreeItem.module.scss';

// TODO - extract
const TreeViewItemPadding: number = 48;

export interface ITreeItemProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
	nodeId?: string;
	label?: string;
	isExpanded?: boolean;
	isSelected?: boolean;
	isSelectable?: boolean;
	onToggleExpand?: (id: string) => void;
	onItemSelect?: (e: { id: string; isSelected: boolean }) => void;
}

export const TreeItem = (props: ITreeItemProps): React.JSX.Element => {
	const { nodeId, label, children, className, isExpanded, isSelected, isSelectable, onToggleExpand, onItemSelect } = props;

	const [_isExpanded, setIsExpanded] = useState<boolean>(false);
	const [_isSelected, setIsSelected] = useState<boolean>(false);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.treeItem);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	useEffect(() => {
		if (isExpanded !== undefined) {
			setIsExpanded(isExpanded);
		}
	}, [isExpanded]);

	useEffect(() => {
		if (isSelected !== undefined) {
			setIsSelected(isSelected);
		}
	}, [isSelected]);

	const handleOnToggleExpand = (nodeId: string): void => {
		setIsExpanded(!_isExpanded);
		onToggleExpand && onToggleExpand(nodeId);
	};

	const handleOnSelect = (nodeId: string): void => {
		setIsSelected(!_isSelected);
		onItemSelect && onItemSelect({ id: nodeId, isSelected: !_isSelected });
	};

	return (
		<li className={getCssClasses()} style={{ paddingLeft: `${TreeViewItemPadding * (children ? 0 : 1)}px` }}>
			<div className="d-flex align-items-center">
				{children && nodeId && (
					<IconButton
						onClick={(): void => handleOnToggleExpand(nodeId)}
						icon={!_isExpanded ? <ChevronRightSolidIcon /> : <ChevronDownSolidIcon />}
					/>
				)}

				{isSelectable && nodeId && <Checkbox checked={_isSelected} onChange={(): void => handleOnSelect(nodeId)} />}

				{label}
			</div>

			{children && _isExpanded ? <ul>{children}</ul> : null}
		</li>
	);
};
