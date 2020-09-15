import React from 'react';
import { render } from '@testing-library/react';
import App from './app/App';

test('Runs this test', () => {
    const { getByText } = render(<App />);
    const button = getByText(/hello/i);
    expect(button).toBeInTheDocument();
});
