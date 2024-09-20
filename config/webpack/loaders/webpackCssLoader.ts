import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const webpackCssLoader = (isDev: boolean) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    sourceMap: isDev,
                    modules: {
                        auto: (path: string) => path.includes('.module.'),
                        localIdentName: isDev ? '[name]-[local]' : '[hash:base64]',
                    },
                },
            },
            'sass-loader',
        ],
    };
};
