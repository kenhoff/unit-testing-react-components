// webpack.config.js

module.exports = {
	entry: './test-jsx/TodoListReactComponent.test.jsx',
	output: {
		filename: './test/app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
}
