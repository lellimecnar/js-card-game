const webpack = require('webpack');
const path = require('path');
const {
	paramCase,
	pascalCase,
} = require('change-case');

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
	[
		'nert',
	].reduce(name => ({
		name,
		entry: [path.resolve(PKG_DIR, name, 'src/index.js')],
		output: {
			path: path.resolve(PKG_DIR, name, 'lib'),
			filename: `card-game-${ name }.dist.js`,
			library: pascalCase(name) + 'Game',
		},
	})),
];
