import path from 'path';
import webpack from 'webpack';

import { webpackCssLoader } from '../webpack/loaders/webpackCssLoader';
import { webpackSvgLoader } from '../webpack/loaders/webpackSvgLoader';
import { IBuildPaths } from '../webpack/types/webpackTypes';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: IBuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    const svgRegExp = /svg/;
    const svgLoader = webpackSvgLoader();

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(webpackCssLoader(true));
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
        if (svgRegExp.test(rule.test as string)) {
            return {
                ...rule,
                exclude: svgLoader.test,
            };
        }
        return rule;
    });
    config.module.rules.push(svgLoader);

    return config;
};
