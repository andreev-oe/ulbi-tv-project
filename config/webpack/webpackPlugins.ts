import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { IWebpackConfig } from './types/webpackTypes';

export function webpackPlugins({ paths }: IWebpackConfig): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin()
    ];
};
