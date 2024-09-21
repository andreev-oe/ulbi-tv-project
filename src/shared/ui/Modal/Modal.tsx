import React, { ReactNode, useCallback, useEffect, useRef } from 'react';

import { useTheme } from 'app/providers/themeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';

import Styles from './Modal.module.scss';

interface IModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 250;

export const Modal = ({ className, children, isOpen, onClose }: IModalProps) => {
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const { theme } = useTheme();

    const [isModalClosing, setIsModalClosing] = React.useState(false);

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
            window.addEventListener('keydown', handleEscKey);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', handleEscKey);
        };
    }, [isOpen, handleEscKey]);

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
                    <div
                        onClick={handleContentClick}
                        className={classNames({ rootClass: Styles.content, additionalClasses: [Styles[theme]] })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
