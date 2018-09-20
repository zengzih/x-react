const base = require('./base');
const path = require('path');
const dfPath = require('./path');
const merge = require('webpack-merge');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const webpack = require('webpack');

let extractOption = {
  allChunks: true,
  filename: 'assets/css/[name]_[hash:6].css'
};

const extractCSS = new extractTextWebpackPlugin(extractOption)
const extractLESS = new extractTextWebpackPlugin(extractOption)
const extractSCSS = new extractTextWebpackPlugin(extractOption)

/*entry: {
  vendor: ['jquery', 'react', 'react-dom', 'react-router-dom'],
    app: path.resolve(dfPath.root, 'src/app.js')
},*/

let strategyMerge = merge.strategy({
  entry: 'replace',
  output: 'replace',
  module: {
    rules: 'replace'
  }
});

let config = {
  entry: [
    path.resolve(dfPath.root, 'src/app.js')
  ],

  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        exclude: [
          dfPath.node_modules
        ]
      },
      // {
      //     test: /\.css$/,
      //     use: [
      //         'style-loader',
      //         {
      //             loader: 'css-loader',
      //             options: {
      //
      //             }
      //         }
      //     ]
      // },
      {
        test: /\.css$/,
        use: extractSCSS.extract({
          use: ['css-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            "sass-loader"
          ],
        }),
        include: [dfPath.src]
      },
      {
        test: /\.scss$/,
        use: extractSCSS.extract({
          use: [
            {
              loader: 'css-loader',
            },
            "sass-loader"
          ],
        }),
        exclude: [dfPath.src]
      },
      {
        test: /\.less$/,
        use: extractLESS.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            "less-loader"
          ]
        })
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/img/'
            }
          }
        ],
      },
      {
        test: /\.(mp4|ogg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/media/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [

          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/font/',
              mimetype: 'application/font-woff'
            }
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/font/',
              mimetype: 'application/octet-stream'
            }
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/font/',
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/font/',
              mimetype: 'image/svg+xml'
            }
          }
        ]
      },

    ]
  },

  plugins: [
    extractCSS,
    extractSCSS,
    extractLESS,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new ClosureCompilerPlugin(),
  ],

  devtool: 'source-map',
};

module.exports = strategyMerge(base, config);
