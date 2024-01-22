import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@storybook/test';
import Error from './index';

test('render Error view', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Vista Error')).toBeInTheDocument()
});