const { join } = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const context = join(__dirname, '..');

module.exports = {
    output: {
        path: join(context, 'public/assets'),
        filename: '[name].bundle.js',
        publicPath: '/assets/',
        chunkFilename: '[name].chunk.js',
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': join(context, 'assets/shared'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                use: 'vue-loader',
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
};
