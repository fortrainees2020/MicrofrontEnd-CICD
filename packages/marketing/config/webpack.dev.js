const {merge} = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
//Added for integration
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        },
    },
    plugins: [ 
        // Added for integration
        new ModuleFedrationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            //When someone calles Marketing share the bootstrap,js
            exposes: {
                './MarketingApp': './src/bootstrap'
            },
            //shared: ['react', 'react-dom'],
            shared: packageJson.dependencies,
            }),
      new HtmlWebpackPlugin({
        template: './public/index.html'
    })]};
module.exports  = merge(commonConfig, devConfig);

