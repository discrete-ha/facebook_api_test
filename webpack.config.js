var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname ,
        filename: 'bundle.js'
    },
    
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],

    devtool: 'inline-source-map',

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname 
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets:[ 'es2015', 'react', 'stage-2' ]
                }
            }
        ]
    }
};