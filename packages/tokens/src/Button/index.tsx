/* eslint-disable max-len */
import React from 'react';

import cl from '../utils/classname-processor';

import styles from './styles.module.css';

interface ButtonProps {
	className?: string;
	size?: string;
	bg?: string;
	children?: JSX.Element | null;
}

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
