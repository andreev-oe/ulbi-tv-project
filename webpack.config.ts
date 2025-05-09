import path from 'path';
import type webpack from 'webpack';

import type { IBuildPaths, IWebpackEnv } from './config/webpack/types/webpackTypes';
import { webpackConfig } from './config/webpack/webpackConfig';

const config = (env: IWebpackEnv) => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
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
