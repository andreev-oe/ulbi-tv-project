import TerserPlugin from 'terser-webpack-plugin';
import type webpack from 'webpack';

export function webpackOptimization(): webpack.Configuration['optimization'] {
    return {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    };
}
