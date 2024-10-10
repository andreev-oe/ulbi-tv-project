import webpack from 'webpack';

import { IWebpackOptions } from './types/webpackTypes';
import { webpackDevServer } from './webpackDevServer';
import { webpackLoaders } from './webpackLoaders';
import { webpackOptimization } from './webpackOptimization';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';

export function webpackConfig(options: IWebpackOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        plugins: webpackPlugins(options),
        resolve: webpackResolvers(options),
        optimization: webpackOptimization(),
        module: {
            rules: webpackLoaders(options),
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? webpackDevServer(options) : undefined,
    };
}
