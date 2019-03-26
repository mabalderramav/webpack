const path = require('path');

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
               test: /\.css$/,
               use: ['style-loader','css-loader'],
            }
        ]
    }
}
