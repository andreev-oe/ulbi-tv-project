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
    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __ENV_TYPE__: JSON.stringify('storybook'),
    });
    const svgRegExp = /svg/;
    const svgLoader = webpackSvgLoader();
    config?.resolve?.modules?.unshift(paths.src);
    config?.plugins?.push(definePlugin);
    config?.resolve?.extensions?.push('.ts', '.tsx');
    config?.module?.rules?.push(webpackCssLoader(true));
    if (config?.module?.rules) {
        // @ts-ignore
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (svgRegExp.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: svgLoader.test,
                };
            }
            return rule;
        });
    }
    config?.module?.rules?.push(svgLoader);

    return config;
};
