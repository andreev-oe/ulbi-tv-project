import { FC, lazy } from 'react';

import { ILoginFormProps } from 'features/AuthByUserName/ui/LoginForm/LoginForm';

export const AboutPageLazy = lazy<FC<ILoginFormProps>>(() =>
    import('./AboutPage').then((module) => ({ default: module.AboutPage })),
);
