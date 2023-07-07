import type { ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import styles from './ExpansionPanel.module.scss';
import { ExpansionPanelContent } from './ExpansionPanelContent';
import { ExpansionPanelHeader } from './ExpansionPanelHeader';

export interface IExpansionPanelProps extends React.ComponentProps<'div'> {
	header: ReactNode;
	children: ReactNode;
	isExpanded?: boolean;
	shadow?: boolean;
	onToggle?: (event: React.MouseEvent, isExpanded: boolean) => void;
}

export const ExpansionPanel = (props: IExpansionPanelProps): JSX.Element => {
	const { header, children, isExpanded = false, shadow, onToggle } = props;

	const [_isExpanded, setIsExpanded] = useState<boolean>(false);

	useEffect(() => {
		setIsExpanded(isExpanded);
	}, [isExpanded]);

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.expansionPanel);
		if (_isExpanded) {
			cssClasses.push(styles.isExpanded);
		}
		shadow && cssClasses.push(styles.shadow);
		return cssClasses.filter(css => css).join(' ');
	};

	const handleClickHeader = (event: React.MouseEvent): void => {
		setIsExpanded(!_isExpanded);
		onToggle && onToggle(event, !_isExpanded);
	};

	return (
		<div className={getCssClasses()}>
			<ExpansionPanelHeader isExpanded={_isExpanded} onClick={handleClickHeader}>
				{header}
			</ExpansionPanelHeader>

			{_isExpanded && <ExpansionPanelContent>{children}</ExpansionPanelContent>}
		</div>
	);
};
