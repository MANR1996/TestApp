import React from 'react';
import { render } from '@testing-library/react';
import TestHeader from './index.jsx';
import { expect } from '@storybook/test';

const BASICPROPS = {
    subject: 'Test subject',
    topic: 'Test topic'
}

test('render TestHeader without props', () => {
    render(<TestHeader />);
});

test('render TestHeader with basic props', () => {
    const { getByText } = render(<TestHeader {...BASICPROPS} />);
    expect(getByText(BASICPROPS.subject)).toBeInTheDocument()
    expect(getByText(BASICPROPS.topic)).toBeInTheDocument()
});