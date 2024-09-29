import { lazy } from 'react';

export const LoginFormLazy = lazy(() => import('./LoginForm').then((module) => ({ default: module.LoginForm })));
