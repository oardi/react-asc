import React, { ReactNode } from 'react';
import { chevronDownSolidSvg, chevronUpSolidSvg } from '../../assets/icons';
import { SvgIcon } from '../SvgIcon';

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

