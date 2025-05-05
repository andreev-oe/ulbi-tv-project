import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ETheme } from 'app/providers/themeProvider';
import { GlobalThemeDecorator } from 'shared/config/storybook/decorators/GlobalThemeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light: ComponentStory<typeof Modal> = Template.bind({});
Light.args = {
    isOpen: true,
    children:
        'lorem100, lorem100, lorem100, lorem100, lorem100, lorem100 lorem100, lorem100, lorem100, lorem100, lorem100, lorem100',
};

export const Dark: ComponentStory<typeof Modal> = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'lorem100, lorem100, lorem100, lorem100, lorem100, lorem100 lorem100, lorem100, lorem100, lorem100, lorem100, lorem100',
};
Dark.decorators = [GlobalThemeDecorator(ETheme.DARK)];
