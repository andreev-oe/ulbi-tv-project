import { render, screen } from '@testing-library/react';

import { Button, EButtonTheme } from './Button';

describe('Button', () => {
    test('to be in the document', () => {
        render(<Button theme={EButtonTheme.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toBeInTheDocument();
    });
    test('with class clear', () => {
        render(<Button theme={EButtonTheme.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toHaveClass('clear');
    });
});
