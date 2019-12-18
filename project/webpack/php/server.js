const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('../common');
const context = join(__dirname, '../..');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        server: join(context, 'assets/server/index.js'),
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
    ]
});
