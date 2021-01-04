import React from 'react';

interface IListItemAvatarProps {
	avatar: string;
}

export const ListItemAvatar = ({ avatar }: IListItemAvatarProps) => {
	return (
		<div className="avatar">
			<div className="svg-icon" dangerouslySetInnerHTML={{ __html: avatar }} />
		</div>
	)
}
