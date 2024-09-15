import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IWebpackOptions } from './types/webpackTypes';

export function webpackPlugins({ paths }: IWebpackOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin()
    ];
};
