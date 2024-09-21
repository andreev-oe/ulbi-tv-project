import webpack from 'webpack';

import { IWebpackOptions } from './types/webpackTypes';

export function webpackResolvers(options: IWebpackOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: ['node_modules', options.paths.src],
        mainFiles: ['index'],
        alias: {},
    };
}
