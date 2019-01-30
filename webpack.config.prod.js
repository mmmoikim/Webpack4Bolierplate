const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'production',
    optimization: {
        //minimize: true, //default true in production
        splitChunks: {
            //Cache groups can inherit and/or override any options
            cacheGroups: {
                //Create a vendors chunk, which includes all code from node_modules in the whole application.
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        //remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist'])
    ]
}