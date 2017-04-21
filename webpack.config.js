// webpack.config.js

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: './build/app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
}
