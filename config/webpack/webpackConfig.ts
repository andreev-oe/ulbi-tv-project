import { IWebpackConfig } from './types/webpackTypes';
import webpack from 'webpack';
import { webpackPlugins } from './webpackPlugins';
import { webpackResolvers } from './webpackResolvers';
import { webpackLoaders } from './webpackLoaders';

export function webpackConfig(options: IWebpackConfig): webpack.Configuration {
const { mode, paths } = options;
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
    };
};
