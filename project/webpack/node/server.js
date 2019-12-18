const { join } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

const common = require('../common');
const context = join(__dirname, '../..');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    target: 'node',
    externals: nodeExternals(),
    entry: {
        server: join(context, 'assets/server/index.js'),
    },
    output: {
        libraryTarget: 'commonjs2',
    },
    plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
        }),
        new VueSSRServerPlugin(),
    ]
});
