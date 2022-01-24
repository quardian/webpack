var path = require('path');

module.exports = {
    mode: 'none',

    entry: './src/app.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },

    module:{

    },
    
    stats:{
        colors: true
    },
    devtool: 'source-map'
}