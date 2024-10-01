import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { IWebpackOptions } from './types/webpackTypes';

export function webpackPlugins({ paths, isDev, apiUrl }: IWebpackOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HTMLWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css',
            chunkFilename: 'css/[id].[name].[contenthash:5].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
        }),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshPlugin({
                overlay: false,
            }),
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
}
