let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
      overlay: true,
      open: true
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  "@babel/plugin-transform-react-jsx",
                  "@babel/plugin-proposal-class-properties"
                ]
              }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                
              },
              'css-loader',
            ],
          },
        ]
      }
}

module.exports = config;