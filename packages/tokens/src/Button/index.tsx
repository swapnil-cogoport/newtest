import React from 'react';

import cl from '../utils/classname-processor';

import styles from './styles.module.css';

console.log(styles);

interface ButtonProps {
	/** classname for the root element  */
	className?: string;
	size?: string;
	bg?: string;
	children?: JSX.Element | null;
}
/**
 * Button Component that begs to be clicked!
 */
function Button({
	className,
	size = 'md',
	bg = 'primary',
	children = null,
}: ButtonProps) {
	return (
		<button
			className={cl`
				ui-button-container 
				${className} 
				${styles.container} 
				${cl.preset('size', size)} 
				${cl.preset('bg', bg)}`}
			type="button"
		>
			{children}
		</button>
	);
}

export default Button;
