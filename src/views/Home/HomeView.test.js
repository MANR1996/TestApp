import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@storybook/test';
import Home from './index';

test('render Home view', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Vista Home')).toBeInTheDocument()
});