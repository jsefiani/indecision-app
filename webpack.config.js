const path = require('path');
const webpack = require('webpack');
// Extracting styles
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const APP_DIR = path.join(__dirname, "src");

const config = (env, argv) => {
  console.log('argv', argv.mode)
  return {
    mode: argv.mode,
    entry: {
      bundle: APP_DIR + "/app.js"
    },
    output: {
      path: path.resolve(__dirname, "public"),
      // using cache busting
      filename: "[name].[chunkhash].js", 
      publicPath: "./"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        // {
        //   use: CSSExtract.extract({
        //     use: [
        //       {
        //         loader: 'css-loader',
        //         options: {
        //           sourceMap: true
        //         }
        //       },
        //       {
        //         loader: 'sass-loader',
        //         options: {
        //           sourceMap: true
        //         }
        //       }
        //     ]
        //   }),
        //   test: /\.s?css$/
        // },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            argv.mode === 'development' ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: "images/[hash]-[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: argv.mode === 'production' ? "[name].[hash].css" : "[name].css",
        chunkFilename: argv.mode === 'production' ? "[id].[hash].css" : "[id].css"
      }),
      new htmlWebpackPlugin({
        // Will create a stand-alone index.html file
        template: "index.html"
      }),
      // new webpack.DefinePlugin({
      //   "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      // })
    ],
    devtool: argv.mode === 'production' ? "" : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      open: true
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      }
    }
  }
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};




module.exports = config;

// devtool: isProduction ? 'source-map' : 'inline-source-map',