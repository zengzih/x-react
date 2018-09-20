const path = require('path');
const dfPath = require('./path');
const webpack = require('webpack');
const Html = require('html-webpack-plugin');
const CleanFolder = require('clean-webpack-plugin');
// path.resolve(dfPath.root, 'src/app.js'),
module.exports = {
    entry: [
        path.resolve(dfPath.root, 'src/app.js')
    ],
    output: {
        path: dfPath.dist,
        filename: 'assets/js/index.js',
        publicPath: '/',
        chunkFilename: 'assets/js/sepChunk.js',
        hashDigestLength: 6
    },

    module:{
        rules:[

            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: ['link:href']
                    }
                }
            }
        ]
    },

    plugins: [
        new Html({
            name: 'index.html',
            template: dfPath.src +'/index.html'
        }),
        new CleanFolder(['dist'],{
            root: dfPath.root
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            jQuery: 'jquery',
            $: 'jquery',
            Component: ['react', 'Component'],
            ReactDOM: 'react-dom',
            PT: 'prop-types',
            _: 'lodash',
            Route: ['react-router-dom', 'Route'],
            Router: ['react-router-dom', 'BrowserRouter'],
            connect: ['react-redux', 'connect'],
            Provide: ['react-redux', 'Privide']
        })
    ],

    resolve:{
        // 当你reuire时，不需要加上以下扩展名
        extensions: ['.js', '.md', '.txt'],
        modules:[
            'node_modules',
            dfPath.root,
            dfPath.src,
            dfPath.common,
            dfPath.view,
            dfPath.components,
            dfPath.layout,
        ]
    }
};
