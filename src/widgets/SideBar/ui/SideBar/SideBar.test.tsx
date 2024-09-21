import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/renderWithRouter/ComponentRender';

import { SideBar } from './SideBar';

describe('SideBar', () => {
    test('to be in the document', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('toggle', () => {
        ComponentRender(<SideBar />);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
