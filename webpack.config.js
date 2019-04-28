const {
	ProvidePlugin,
} = require('webpack');
const path = require('path');

const ROOT_DIR = __dirname;
const PKG_DIR = path.resolve(ROOT_DIR, './packages');

const config = {
	mode: 'development',
	context: ROOT_DIR,
	module: {
		rules: [
			{
				test: /\.js$/,
				include: PKG_DIR,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							compact: false,
						},
					},
				],
			},
		],
	},
	plugins: [
		new ProvidePlugin({
			'_': ['@card-game/core/src/util/privates', 'default'],
			'Enum': ['enumify', 'Enum'],
		}),
	],
};

module.exports = [
	...[
		{
			name: 'core',
			library: 'CardGame',
		},
		{
			name: 'deck-phase-10',
			library: 'Phase10Deck',
		},
		{
			name: 'deck-rook',
			library: 'RookDeck',
		},
		{
			name: 'deck-standard',
			library: 'StandardDeck',
		},
		{
			name: 'deck-uno',
			library: 'UNODeck',
		},
		{
			name: 'game-uno',
			library: 'UNOGame',
		},
	].map(({ name, library }) => ({
		...config,
		name,
		entry: [ path.resolve(PKG_DIR, name, 'src/index.js') ],
		output: {
			path: path.resolve(PKG_DIR, name, 'lib'),
			filename: `card-game-${ name }.dist.js`,
			library,
		},
	})),
];
