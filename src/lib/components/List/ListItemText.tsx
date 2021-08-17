import React, { ReactNode } from 'react';

interface IListItemTextProps {
	primary: ReactNode;
	secondary?: ReactNode;
}

export const ListItemText = ({ primary, secondary }: IListItemTextProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push('list-item-text');
		return cssClasses.filter(css => css).join(' ');
	}

	return (
		<div className={getCssClasses()}>
			<ListItemTextPrimary>
				{primary}
			</ListItemTextPrimary>
			{secondary &&
				<ListItemTextSecondary>
					{secondary}
				</ListItemTextSecondary>
			}
		</div>
	);
}


const ListItemTextPrimary = ({ children }: any) => (
	<div className="list-item-text-primary">
		{children}
	</div>
);

const ListItemTextSecondary = ({ children }: any) => (
	<div className="list-item-text-secondary text-muted" style={{ fontSize: '0.875rem' }}>
		{children}
	</div>
);
