import { fireEvent, screen, waitFor } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/renderWithRouter/ComponentRender';

import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('Находится в документе', async () => {
        ComponentRender(<SideBar />);
        await waitFor(() => expect(screen.getByTestId('sidebar')).toBeInTheDocument());
    });
    test('Сворачивается', () => {
        ComponentRender(<SideBar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
