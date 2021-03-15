import React from 'react';

interface IListItemIconProps {
	icon: React.SVGProps<SVGSVGElement>;
}

export const ListItemIcon = ({ icon }: IListItemIconProps) => (
	<div className="icon">
		<div className="svg-icon">
			{icon}
		</div>
	</div>
)
