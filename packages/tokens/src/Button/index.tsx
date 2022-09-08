import React from 'react';

import cl from '../utils/classname-processor';

import styles from './styles.module.css';

interface ButtonProps {
	/** classname for the root element  */
	className?: string;
	size?: string;
	bg?: string;
	children?: React.ReactNode;
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
			<div className={styles.inner_container}>
				{children}
			</div>
		</button>
	);
}

export default Button;
