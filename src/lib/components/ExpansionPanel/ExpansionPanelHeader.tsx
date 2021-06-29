import React, { ReactNode } from 'react';
import { ChevronDownSolidIcon, ChevronUpSolidIcon } from '../../assets/icons';
import { Icon } from '../Icon';

export interface IExpansionPanelHeaderProps {
	onClick?: (event: React.MouseEvent) => void;
	children?: ReactNode;
	isExpanded: boolean;
}

export const ExpansionPanelHeader = (props: IExpansionPanelHeaderProps) => {

	const { children, isExpanded, onClick } = props;

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick(e);
	}

	return (
		<div
			className="expansion-panel-header d-flex align-items-center"
			onClick={handleClick}
		>

			{children}

			<span className="ml-auto text-muted">
				<Icon>
					{isExpanded ? <ChevronUpSolidIcon /> : <ChevronDownSolidIcon />}
				</Icon>
			</span>
		</div>
	);
}

