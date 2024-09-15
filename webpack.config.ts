import path from 'path';
import webpack from 'webpack';
import { webpackConfig } from './config/webpack/webpackConfig';
import { IBuildPaths, IWebpackEnv } from './config/webpack/types/webpackTypes';


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

    const config: webpack.Configuration = webpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT,
    });
    return config;
};

export default config;
