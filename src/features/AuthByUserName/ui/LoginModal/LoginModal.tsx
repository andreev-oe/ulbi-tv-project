import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';

import { LoginForm } from '../LoginForm/LoginForm';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: ILoginModalProps) => {
    return (
        <Modal
            lazy
            isOpen={isOpen}
            onClose={onClose}
            className={classNames({ rootClass: '', additionalClasses: [className] })}
        >
            <LoginForm />
        </Modal>
    );
};
