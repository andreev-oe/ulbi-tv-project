import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button', () => {
    test('to be in the document', () => {
        render(<Button theme={ThemeButton.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toBeInTheDocument();
    });
    test('with class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Кнопка</Button>);
        expect(screen.getByText('Кнопка')).toHaveClass('clear');
    });
});
