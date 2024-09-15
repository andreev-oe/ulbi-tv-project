import { IWebpackOptions } from './types/webpackTypes';
import { Configuration } from 'webpack-dev-server';

export function webpackDevServer(options: IWebpackOptions): Configuration {
    const { port } = options;
    return {
        port: port,
        open: true,
    };
}
