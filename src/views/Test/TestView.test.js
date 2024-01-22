import React from 'react';
import { render } from '@testing-library/react';
import { expect } from '@storybook/test';
import Test from './index';

test('render Test view', () => {
    const { getByText } = render(<Test />);
    expect(getByText('Vista Test')).toBeInTheDocument()
});