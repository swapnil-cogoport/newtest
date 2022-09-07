const mergeClassNames = (...classNames: any[]): string => {
	let mergedClassName = '';
	classNames.forEach((className) => {
		if (className) {
			mergedClassName += ` ${className.toString()}`;
		}
	});
	return mergedClassName;
};

export default mergeClassNames;
