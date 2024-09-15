export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface IWebpackEnv {
    mode: TBuildMode;
    port: number;
}

export interface IWebpackOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
};
