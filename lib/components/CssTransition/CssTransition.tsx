import React, { useEffect, useRef, useState } from "react";

interface ICssState {
	hidden?: boolean;

	enter?: boolean;
	enterStart?: boolean;
	enterEnd?: boolean;

	leave?: boolean;
	leaveStart?: boolean;
	leaveEnd?: boolean;
}

interface ICssTransitionProps {
	className: string;
	children: React.ReactNode;
	show: boolean | undefined;
}

export const CssTransition = (props: ICssTransitionProps) => {
	const { className, children, show } = props;
	const [isShow, setIsShow] = useState<boolean | undefined>(undefined);
	const [cssState, setCssState] = useState<ICssState | undefined>({
		hidden: true
	});
	const transitionConainter = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (show !== undefined) {
			setIsShow(show);
		}
	}, [show]);

	const nextFrame = () => {
		return new Promise((resolve) => {
			requestAnimationFrame(() => {
				requestAnimationFrame(resolve);
			});
		});
	};

	const afterTransition = (element: Element | undefined): Promise<void> => {
		return new Promise((resolve) => {
			if (element) {
				const duration = Number(getComputedStyle(element).transitionDuration.replace("s", "")) * 1000;
				setTimeout(() => { resolve(); }, duration);
			} else {
				resolve();
			}
		});
	};

	const renderAnimation = async (show: boolean) => {
		if (show === true) {
			setCssState({ enter: true, enterStart: true });
			await nextFrame();
			setCssState({ enter: true, enterEnd: true });
			await afterTransition(transitionConainter.current as Element);
			setCssState(undefined);
		}
		if (show === false) {
			setCssState({ leave: true, leaveStart: true });
			await nextFrame();
			setCssState({ leave: true, leaveEnd: true });
			await afterTransition(transitionConainter.current as Element);
			setCssState({ hidden: true });
		}
	};

	useEffect(() => {
		if (isShow !== undefined && (isShow === true || isShow === false)) {
			renderAnimation(isShow);
		}
	}, [isShow]);

	const getCssClasses = () => {
		const cssClasses = [];
		cssState?.hidden && cssClasses.push(`hidden`);

		cssState?.enter && cssClasses.push(`${className}-enter`);
		cssState?.enterStart && cssClasses.push(`${className}-enter-start`);
		cssState?.enterEnd && cssClasses.push(`${className}-enter-end`);

		cssState?.leave && cssClasses.push(`${className}-leave`);
		cssState?.leaveStart && cssClasses.push(`${className}-leave-start`);
		cssState?.leaveEnd && cssClasses.push(`${className}-leave-end`);

		return cssClasses.filter((css) => css).join(" ");
	};

	return (
		<div ref={transitionConainter} className={getCssClasses()}>
			{children}
		</div>
	);
};
