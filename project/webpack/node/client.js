const { join } = require('path');
const merge = require('webpack-merge');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const common = require('../common');
const context = join(__dirname, '../..');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        client: join(context, 'assets/client/index.js'),
    },
    plugins: [
        new VueSSRClientPlugin(),
    ],
});
