import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    test('to be in the document', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toBeInTheDocument();
    });
    test('with class clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toHaveClass('clear');
    });
});
