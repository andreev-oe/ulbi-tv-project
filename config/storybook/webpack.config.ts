import webpack from 'webpack';
import path from 'path';
import { IBuildPaths } from '../webpack/types/webpackTypes';
import { webpackCssLoader } from '../webpack/webpackCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(webpackCssLoader(true));

    return config;
};
