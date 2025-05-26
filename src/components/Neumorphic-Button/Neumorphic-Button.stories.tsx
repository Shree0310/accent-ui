import type { Meta, StoryObj } from '@storybook/react';
import { NeumorphicButton } from './Neumorphic-Button';

const meta: Meta<typeof NeumorphicButton> = {
    title: 'Components/NeumorphicButton',
    component: NeumorphicButton,
    tags: ['autodocs'],
    parameters: {
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#e0e0e0' },
                { name: 'dark', value: '#222' },
            ],
        },
        layout: 'centered',
    },
    argTypes: {
        children: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof NeumorphicButton>;

export const Primary: Story = {
    args: {
        children: 'Neumorph Button',
    }
}