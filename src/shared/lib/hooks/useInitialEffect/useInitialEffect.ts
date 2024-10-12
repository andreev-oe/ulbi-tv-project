import { useEffect } from 'react';

export const useInitialEffect = (effect: () => void) => {
    useEffect(() => {
        if (__ENV_TYPE__ !== 'storybook') {
            effect();
        }
    }, []);
};
