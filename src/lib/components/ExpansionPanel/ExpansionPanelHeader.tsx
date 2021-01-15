import React, { ReactNode } from 'react';
import { chevronDownSolidSvg, chevronUpSolidSvg } from '../../assets/icons';
import { SvgIcon } from '../SvgIcon';

export interface IExpansionPanelHeaderProps {
	onClick?: () => void;
	children?: ReactNode;
	isExpanded: boolean;
}

export const ExpansionPanelHeader = ({ children, isExpanded, onClick }: IExpansionPanelHeaderProps) => {

	const handleClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		onClick && onClick();
	}

	return (
		<div
			className="expansion-panel-header d-flex align-items-center"
			onClick={handleClick}>

			{children}

			<span className="ml-auto text-muted">
				<SvgIcon
					svg={isExpanded ? chevronUpSolidSvg : chevronDownSolidSvg}
				/>
			</span>
		</div>
	);
}

