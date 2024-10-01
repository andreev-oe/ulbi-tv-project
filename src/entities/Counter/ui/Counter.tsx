import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from 'shared/ui/Button/Button';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="Counter-title">
                {t('Значение')} = {counterValue}
            </h1>
            <Button data-testid="Counter-increment-btn" onClick={increment}>
                {t('Прибавить')}
            </Button>
            <Button data-testid="Counter-decrement-btn" onClick={decrement}>
                {t('Убавить')}
            </Button>
        </div>
    );
};
