import path from 'path';
import webpack from 'webpack';

import { IBuildPaths, IWebpackEnv } from './config/webpack/types/webpackTypes';
import { webpackConfig } from './config/webpack/webpackConfig';

const config = (env: IWebpackEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const isDev = mode === 'development';
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    const config: webpack.Configuration = webpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        port: PORT,
        envType: 'react',
    });
    return config;
};

export default config;
