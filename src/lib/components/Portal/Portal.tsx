import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

export interface IPortalProps {
	children: React.ReactNode;
	target?: HTMLElement;
	className?: string;
}

export const Portal = ({ children, target = document.body, className }: IPortalProps): React.JSX.Element => {
	const containerEl: HTMLDivElement = useMemo(() => document.createElement('div'), []);
	useEffect(() => {
		className && className.split(' ').forEach(cssClass => containerEl.classList.add(cssClass));
		target.appendChild(containerEl);
		return (): void => {
			target.removeChild(containerEl);
		};
	}, []);
	return createPortal(children, containerEl);
};
