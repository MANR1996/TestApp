import React from 'react';
import { FailIcon, RightIcon } from './index'
import { render } from '@testing-library/react';
import { expect } from '@storybook/test';

test('render RightIcon', () => {
    const { queryByTestId } = render(<RightIcon />);
    expect(queryByTestId('right-icon')).toBeInTheDocument();
});

test('render FailIcon', () => {
    const { queryByTestId } = render(<FailIcon />);
    expect(queryByTestId('fail-icon')).toBeInTheDocument();
});