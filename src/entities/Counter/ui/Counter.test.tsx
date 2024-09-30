import { userEvent } from '@storybook/testing-library';
import { screen, waitFor } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/renderWithRouter/ComponentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('Находится в документе', async () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await waitFor(() => expect(screen.getByTestId('Counter-title')).toHaveTextContent('10'));
    });
    test('Прибавить 1', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('Counter-increment-btn'));
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('11');
    });
    test('Убавить 1', () => {
        ComponentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('Counter-decrement-btn'));
        expect(screen.getByTestId('Counter-title')).toHaveTextContent('9');
    });
});
