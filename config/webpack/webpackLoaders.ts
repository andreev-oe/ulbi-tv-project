import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IWebpackOptions } from './types/webpackTypes';

export function webpackLoaders(options: IWebpackOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };

    const fileLoader ={
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: options.isDev,
                    modules: {
                        auto: (path: string) => path.includes('.module.'),
                        localIdentName: options.isDev ? '[name]-[local]' : '[hash:base64]',
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader,
        svgLoader,
        fileLoader,
    ];
}
