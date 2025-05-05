import type { Configuration } from 'webpack-dev-server';

import type { IWebpackOptions } from './types/webpackTypes';

export function webpackDevServer(options: IWebpackOptions): Configuration {
    const { port } = options;
    return {
        port,
        open: true,
        historyApiFallback: true,
        client: {
            overlay: false,
        },
    };
}
