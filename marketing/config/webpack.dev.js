const {merge}  = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    }, 
    plugins: [
        new HTMLWebPackPlugin({
            template: 'public/index.html'
        }), 
        new ModuleFederationPlugin(
            {
                name: "marketing",
                filename: 'remoteEntry.js',
                exposes: {
                    './MarketingApp': './src/bootstrap' 
                },
                shared: packageJson.dependencies
            }
        )
    ]

}

module.exports = merge(commonConfig, devConfig);
