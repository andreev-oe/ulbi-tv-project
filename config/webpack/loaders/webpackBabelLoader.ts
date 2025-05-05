import type { IWebpackOptions } from '../types/webpackTypes';

export const webpackBabelLoader = (options: IWebpackOptions) => {
    return {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [options.isDev && 'react-refresh/babel'].filter(Boolean),
            },
        },
    };
};
