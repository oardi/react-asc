import React, { ReactNode } from 'react';
import styles from './ListItemTextIcon.module.scss';

interface IListItemTextProps extends React.ComponentProps<"div"> {
	primary: ReactNode;
	secondary?: ReactNode;
}

export const ListItemText = ({ primary, secondary, ...rest }: IListItemTextProps) => {

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.listItemText);
		return cssClasses.filter(css => css).join(' ');
	}

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
}


const ListItemTextPrimary = ({ children }: React.ComponentProps<'div'>) => (
	<div className="list-item-text-primary">
		{children}
	</div>
);

const ListItemTextSecondary = ({ children }: React.ComponentProps<'div'>) => (
	<div className="list-item-text-secondary text-muted" style={{ fontSize: '0.875rem' }}>
		{children}
	</div>
);
