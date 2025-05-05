import type { EUserRole } from 'entities/User';
import type { RouteProps } from 'react-router-dom';

export type TAppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: EUserRole[];
};
