import { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

import Styles from './NavBar.module.scss';

interface INavBarProps {
    className?: string;
}

export const NavBar = (props: INavBarProps) => {
    const { className } = props;

    const { t } = useTranslation();

    const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModalOpened((prev) => !prev);
    }, [setIsAuthModalOpened]);

    return (
        <div className={classNames({ rootClass: Styles.NavBar, additionalClasses: [className] })}>
            <div className={Styles.links}>
                <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                    {t('Войти')}
                </Button>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <Modal isOpen={isAuthModalOpened} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, dolor, exercitationem! Aspernatur
                    delectus eos est fugiat impedit maiores molestias praesentium sed voluptatum! Ab ad autem deleniti
                    enim facere magnam neque officiis quam reprehenderit voluptatibus? Alias at consectetur distinctio
                    eaque est explicabo fugiat harum hic incidunt iste iusto, laboriosam libero maiores maxime nemo
                    nostrum, numquam obcaecati odio odit pariatur perferendis, quam quas quisquam repellendus
                    reprehenderit temporibus ullam! A adipisci aliquid aspernatur at cumque dignissimos doloremque
                    dolorum ea eaque enim est excepturi, expedita fuga hic illo ipsum iste labore magnam maxime minima
                    molestiae obcaecati odio officiis perferendis possimus qui quibusdam quidem, quod quos rem tempore
                    tenetur totam voluptas. Adipisci aliquam, culpa debitis eos et harum hic id, iste libero placeat
                    saepe totam voluptates. Ab atque error itaque non obcaecati odio quaerat, quasi quis similique
                    suscipit! Dolores harum libero natus. Asperiores commodi culpa fugit in ipsum magni nisi quos vel!
                    Accusantium consequatur cupiditate earum eos fuga fugiat, illo impedit minima nulla odit officia
                    perferendis totam unde voluptatem voluptatum. Blanditiis delectus earum laudantium libero sit ut
                    voluptates voluptatum. Accusamus atque id iste laboriosam mollitia qui repellendus, suscipit
                    temporibus totam voluptatibus. Delectus esse itaque magnam maxime molestiae obcaecati vero?
                    Accusamus architecto assumenda exercitationem laudantium repellat?
                </Modal>
            </div>
        </div>
    );
};
