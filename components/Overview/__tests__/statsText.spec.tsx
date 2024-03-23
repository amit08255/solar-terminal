import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverviewStatsText from '../statsText';

test('Overview stats text should render correctly', () => {
    render(
        <OverviewStatsText label="Total Yield" value={100} unit="kWh" />,
    );

    const label = screen.getByText(/total yield/i);
    const value = screen.getByText(/100/i);
    const unit = screen.getByText(/kwh/i);

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(unit).toBeInTheDocument();
});
