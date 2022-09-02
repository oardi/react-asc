import type { ReactNode } from 'react';
import React from 'react';
import styles from './ListItemTextIcon.module.scss';

interface IListItemTextProps extends React.ComponentProps<'div'> {
	primary: ReactNode;
	secondary?: ReactNode;
}

export const ListItemText = ({ primary, secondary, ...rest }: IListItemTextProps): JSX.Element => {

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.listItemText);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<div className={getCssClasses()} {...rest}>
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
};


const ListItemTextPrimary = ({ children }: React.ComponentProps<'div'>): JSX.Element => (
	<div className="list-item-text-primary">
		{children}
	</div>
);

const ListItemTextSecondary = ({ children }: React.ComponentProps<'div'>): JSX.Element => (
	<div className="list-item-text-secondary text-muted" style={{ fontSize: '0.875rem' }}>
		{children}
	</div>
);
