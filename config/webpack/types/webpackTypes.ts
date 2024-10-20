export type TBuildMode = 'development' | 'production';

export interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string;
    buildLocales: string;
}

export interface IWebpackEnv {
    mode: TBuildMode;
    port: number;
    apiUrl: string;
}

export interface IWebpackOptions {
    mode: TBuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    envType: 'jest' | 'storybook' | 'react';
}
