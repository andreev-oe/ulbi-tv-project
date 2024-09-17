import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IWebpackOptions } from './types/webpackTypes';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function webpackPlugins({ paths, isDev }: IWebpackOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css',
            chunkFilename: 'css/[id].[name].[contenthash:5].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];
};
