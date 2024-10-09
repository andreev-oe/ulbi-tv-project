import webpack from 'webpack';

import { webpackBabelLoader } from './loaders/webpackBabelLoader';
import { webpackCssLoader } from './loaders/webpackCssLoader';
import { webpackSvgLoader } from './loaders/webpackSvgLoader';
import { IWebpackOptions } from './types/webpackTypes';

export function webpackLoaders(options: IWebpackOptions): webpack.RuleSetRule[] {
    const babelLoader = webpackBabelLoader(options);

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

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

    return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader];
}
