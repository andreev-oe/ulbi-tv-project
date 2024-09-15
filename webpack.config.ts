import path from 'path';
import webpack from 'webpack';
import { webpackConfig } from './config/webpack/webpackConfig';
import { IBuildPaths } from './config/webpack/types/webpackTypes';

const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = webpackConfig({
    mode: 'development',
    paths: paths,
    isDev: isDev,
});

export default config;
