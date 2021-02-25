import React, { ReactNode, useEffect, useState } from 'react';
import { ExpansionPanelContent } from './ExpansionPanelContent';
import { ExpansionPanelHeader } from './ExpansionPanelHeader';

export interface IExpansionPanelProps {
	header: ReactNode;
	children: ReactNode;
	isExpanded?: boolean;
	onChange?: (event: React.MouseEvent, isExpanded: boolean) => void;
}

export const ExpansionPanel = (props: IExpansionPanelProps) => {

	const { header, children, isExpanded, onChange } = props;

	const [_isExpanded, setIsExpanded] = useState<boolean>(false);

	useEffect(() => {
		setIsExpanded(isExpanded);
	}, [isExpanded]);

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(`expansion-panel`);
		if (_isExpanded) {
			cssClasses.push(`is-expanded`);
		}
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickHeader = (event: React.MouseEvent) => {
		setIsExpanded(!_isExpanded)
		onChange && onChange(event, !_isExpanded);
	}

	return (
		<div className={getCssClasses()}>
			<ExpansionPanelHeader isExpanded={_isExpanded} onClick={handleClickHeader}>
				{header}
			</ExpansionPanelHeader>

			{_isExpanded &&
				<ExpansionPanelContent>{children}</ExpansionPanelContent>
			}
		</div>
	);
}
