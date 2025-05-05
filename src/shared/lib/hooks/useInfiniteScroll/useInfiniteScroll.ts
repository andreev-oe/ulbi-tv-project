import type { MutableRefObject } from 'react';
import { useEffect } from 'react';

export interface IUseInfiniteScrollProps {
    callBack?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({ callBack, triggerRef, wrapperRef }: IUseInfiniteScrollProps) => {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        if (callBack) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '10px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    callBack();
                }
            }, options);

            observer.observe(triggerRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);
};
