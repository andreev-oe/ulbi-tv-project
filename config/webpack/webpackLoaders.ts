import webpack from 'webpack';
import { IWebpackOptions } from './types/webpackTypes';
import { webpackCssLoader } from './webpackCssLoader';

export function webpackLoaders(options: IWebpackOptions): webpack.RuleSetRule[] {
    const babelLoader = {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = webpackCssLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

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
