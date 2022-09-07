const cl = (...args : [TemplateStringsArray, ...any]) : string => {
	const [template, ...values] = args;
	let parsedString = '';
	template.forEach((str: string) => {
		const value = values.shift() || '';
		parsedString += (str + value);
	});
	return parsedString;
};

cl.preset = (presetKey: string, presetValue: string): string => {
	if (!presetValue) return '';
	if (!presetKey || !['size', 'bg'].includes(presetKey)) return '';
	return `preset-${presetKey}-${presetValue}`;
};

export default cl;
