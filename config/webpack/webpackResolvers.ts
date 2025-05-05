import type webpack from 'webpack';

import type { IWebpackOptions } from './types/webpackTypes';

export function webpackResolvers(options: IWebpackOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
    };
}
