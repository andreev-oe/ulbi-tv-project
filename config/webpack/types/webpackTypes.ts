export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IWebpackConfig {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
};
