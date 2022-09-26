import { COLOR } from '../../component.enums';
import styles from './Dot.module.scss';

export interface IDot extends React.ComponentProps<'div'> {
	color?: COLOR;
	isActive?: boolean;
}

export const Dot = (props: IDot): JSX.Element => {

	const { className, color = COLOR.primary, isActive, ...rest } = props;

	const getCssClasses = (): string => {
		const cssClasses: string[] = [];
		cssClasses.push(styles.dot);
		cssClasses.push(styles[color]);
		isActive && cssClasses.push(styles.isActive);
		className && cssClasses.push(className);
		return cssClasses.filter(css => css).join(' ');
	};

	return (<div className={getCssClasses()} {...rest}></div>);
};
