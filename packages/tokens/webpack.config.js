module.exports = {
	mode   : 'production',
	module : {
		rules: [
			{
				test    : /\.(js|ts|tsx)$/,
				exclude : /(node_modules)/,
				use     : {
					loader: 'swc-loader',
					// options : { minify: true, sourceMaps: true, jsc: { minify: { sourceMap: true } } },
				},
			},
			{
				test    : /\.css$/i,
				exclude : /(node_modules)/,
				use     : [
					'style-loader',
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};
