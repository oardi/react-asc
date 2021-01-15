import React, { ReactNode } from 'react'

export interface IAppBarTitleProps {
	children?: ReactNode;
	onClick?: () => void;
}

export const AppBarTitle = ({ children, onClick }: IAppBarTitleProps) => {
	return (
		<div className="navbar-brand w-100" onClick={() => onClick && onClick()}>
			{children}
		</div>
	)
}
