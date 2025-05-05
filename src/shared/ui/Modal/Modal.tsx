import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useRef } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from '../Portal/Portal';

import Styles from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 250;

export const Modal = ({ className, children, isOpen, onClose, lazy }: IModalProps) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const [isModalClosing, setIsModalClosing] = React.useState(false);

    const [isMounted, setIsMounted] = React.useState(false);

    const handleCloseModal = useCallback(() => {
        setIsModalClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsModalClosing(false);
        }, ANIMATION_DELAY);
    }, [setIsModalClosing, onClose]);

    const handleEscKey = useCallback(
        (evt: KeyboardEvent) => {
            if (evt.key === 'Escape') {
                handleCloseModal();
            }
        },
        [handleCloseModal],
    );

    const handleContentClick = useCallback((evt: React.MouseEvent) => {
        evt.stopPropagation();
    }, []);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleEscKey);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, handleEscKey]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames({
                    rootClass: Styles.Modal,
                    conditionalClasses: { [Styles.opened]: isOpen, [Styles.isClosing]: isModalClosing },
                    additionalClasses: [className],
                })}
            >
                <div onClick={handleCloseModal} className={Styles.overlay}>
                    <div onClick={handleContentClick} className={classNames({ rootClass: Styles.content })}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
