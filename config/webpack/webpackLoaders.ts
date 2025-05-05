import type webpack from 'webpack';

import { webpackBabelLoader } from './loaders/webpackBabelLoader';
import { webpackCssLoader } from './loaders/webpackCssLoader';
import { webpackSvgLoader } from './loaders/webpackSvgLoader';
import type { IWebpackOptions } from './types/webpackTypes';

export function webpackLoaders(options: IWebpackOptions): webpack.RuleSetRule[] {
    const babelLoader = webpackBabelLoader(options);

    const codeBabelLoader = webpackBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = webpackBabelLoader({ ...options, isTSX: true });

    const cssLoader = webpackCssLoader(options.isDev);

    const svgLoader = webpackSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [babelLoader, codeBabelLoader, tsxCodeBabelLoader, cssLoader, svgLoader, fileLoader];
}
