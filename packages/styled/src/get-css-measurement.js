/**
 * Convert CSS Length and measurement units to px depending on type of param
 * @param {string|number} 	cssValue - Value that needs to be converted into a valid css measurement
 * @returns	Valid CSS Value
 */
const getCSSMeasurement = (cssValue) => {
	if (typeof cssValue === 'number') {
		return `${cssValue}px`;
	}
	if (typeof cssValue === 'string') {
		return cssValue;
	}
	throw new Error('getCSSMeasurement only accepts numbers or strings');
};

export default getCSSMeasurement;
