const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // Here are the loader.
            {
                // test: que tiempo de archivo va a recibir,
                // use: que loader se va a encargar del archivo,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-env", { "targets": { "node": "current" } }]]
                    }
                },
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use:  {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    }
                }
            },
            {
               // test: que tiempo de archivo va a recibir,
               // use: que loader se va a encargar del archivo,
               test: /\.css$/,
               use: ExtractTextPlugin.extract({
               // ['style-loader','css-loader']
               // fallback: 'style-loader',
               use: 'css-loader'
               }),
            }
        ]
    },
    plugins: [
        // Here are the loader.
        new ExtractTextPlugin('css/[name].css')
    ]
}
