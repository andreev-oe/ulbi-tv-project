import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin';
import type { IWebpackOptions } from '../types/webpackTypes';

interface IBabelWebpackOptions extends IWebpackOptions {
    isTSX?: boolean;
}

export const webpackBabelLoader = (options: IBabelWebpackOptions) => {
    return {
        test: options.isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    options.isDev && 'react-refresh/babel',
                    '@babel/plugin-transform-runtime',
                    [
                        '@babel/plugin-transform-typescript',
                        {
                            isTSX: options.isTSX,
                        },
                    ],
                    options.isTSX && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid'],
                        },
                    ],
                ].filter(Boolean),
            },
        },
    };
};
