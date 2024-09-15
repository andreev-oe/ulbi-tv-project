import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IWebpackOptions } from './types/webpackTypes';

export function webpackLoaders(options: IWebpackOptions): webpack.RuleSetRule[] {
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
                        exportLocalsConvention: 'camelCaseOnly',
                    },
                },
            },
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader
    ];
}
