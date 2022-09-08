module.exports = {
	mode   : 'production',
	module : {
		rules: [
			{
				test    : /\.(js|ts|tsx)$/,
				exclude : /node_modules/,
				use     : 'swc-loader',
			},
			{
				test    : /\.css$/i,
				exclude : /node_modules/,
				use     : [
					'style-loader',
					{ loader: 'css-loader', options: { modules: true, importLoaders: 1 } },
					{ loader: 'postcss-loader', options: { postcssOptions: { plugins: ['postcss-nested'] } } },
				],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	performance: {
		hints: false,
	},
};
