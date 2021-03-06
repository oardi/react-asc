import React from 'react';

interface IListItemAvatarProps {
	avatar: React.SVGProps<SVGSVGElement>;
}

export const ListItemAvatar = ({ avatar }: IListItemAvatarProps) => (
	<div className="avatar">
		<div className="svg-icon">
			{avatar}
		</div>
	</div>
)
