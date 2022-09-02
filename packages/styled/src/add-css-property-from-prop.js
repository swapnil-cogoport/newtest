import getCSSMeasurement from './get-css-measurement';

/**
 * Get the CSS String for a given prop
 * @param {string} 			propName - Name of the prop to map value from
 * @param {string} 			cssProperty - Name of the CSS property to map the value to
 * @param {Object} 			[options] - Additional options for addCSSPropertyFromProp
 * @param {string} 			[options.defaultValue] - If defined, returns a CSS property with the default value
 * @param {boolean} 		[options.isMeasurement=false] - Determine whether to treat numbers as pixel
 * @returns	CSS Propery Value string
 */
const addCSSPropertyFromProp = (
	propName,
	cssProperty,
	{ defaultValue = undefined, isMeasurement = false } = {},
) => (props) => {
	const propValue = props[propName];
	if (propValue || propValue === 0) {
		return `${cssProperty}: ${isMeasurement ? getCSSMeasurement(propValue) : propValue};`;
	}
	if (defaultValue || defaultValue === 0) {
		return `${cssProperty}: ${isMeasurement ? getCSSMeasurement(defaultValue) : defaultValue};`;
	}
	return '';
};

export default addCSSPropertyFromProp;
