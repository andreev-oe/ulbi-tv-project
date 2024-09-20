export const webpackSvgLoader = () => {
    return {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
    };
};
