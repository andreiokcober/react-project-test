const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')

module.exports = {
  entry: ["@babel/polyfill",'./src/index.jsx'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    static:{
      directory: path.join(__dirname,'dist'),
    },
    historyApiFallback: true,
    compress:true,
    port:8800
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "index.css"
    })
  ],
  module:{
    rules: [
    {
      test: /\.m?jsx$/,
      exclude: /node_modules/,
      loader:  "babel-loader",
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'] 
        }
    },
    {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader"]
    },
    {
      test: /\.scss$/i,
      use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
    }
  ]
} 
}