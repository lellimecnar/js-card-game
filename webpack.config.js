const webpack = require('webpack');
const path = require('path');

const PKG_DIR = path.resolve(__dirname, './packages');

const config = {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {

						},
					},
				],
			},
		],
	},
};

module.exports = [
	{ ...config,
		name: 'core',
		entry: [path.resolve(PKG_DIR, './core/src/index.js')],
		output: {
			path: path.resolve(PKG_DIR, './core/lib'),
			filename: 'card-game-core.dist.js',
			library: 'CardGame',
		},
	},
	{ ...config,
		name: 'nert',
		entry: [path.resolve(PKG_DIR, './nert/src/index.js')],
		output: {
			path: path.resolve(PKG_DIR, './nert/lib'),
			filename: 'card-game-nert.dist.js',
			library: 'NertGame',
		},
	},
];
