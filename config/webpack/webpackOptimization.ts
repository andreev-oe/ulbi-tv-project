import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';

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
