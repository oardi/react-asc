import React from 'react';
import styles from './CardImage.module.scss';

interface ICardImageProps extends React.ComponentProps<"img"> {
}

export const CardImage = (props: ICardImageProps) => {

	const { src, alt, className, ...rest } = props;

	const getCssClasses = () => {
		const cssClasses: Array<string> = [];
		cssClasses.push(styles.cardImage);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (
		<img
			className={getCssClasses()}
			src={src}
			alt={alt}
			{...rest}
		/>
	)
};
