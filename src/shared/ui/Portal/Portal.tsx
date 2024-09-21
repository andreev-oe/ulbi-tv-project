import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    children: ReactNode;
    container?: HTMLElement;
    key?: string;
}

export const Portal = ({ children, container = document.body, key }: IPortalProps) => {
    return createPortal(children, container, key);
};
