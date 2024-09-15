import { IWebpackOptions } from './types/webpackTypes';
import webpack from 'webpack';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';
import { webpackLoaders } from './webpackLoaders';
import { webpackDevServer } from './webpackDevServer';

export function webpackConfig(options: IWebpackOptions): webpack.Configuration {
const { mode, paths, isDev } = options;
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: webpackPlugins(options),
        resolve: webpackResolvers(),
        module: {
            rules: webpackLoaders(),
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? webpackDevServer(options) : undefined,
    };
};
