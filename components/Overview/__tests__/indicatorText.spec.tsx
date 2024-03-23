import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import OverviewIndicatorText from '../indicatorText';

test('Overview indicator text should render correctly', () => {
    render(
        <OverviewIndicatorText text="30 Total Panels" />,
    );

    const para = screen.getByText(/30 total panels/i);
    const indicator = screen.getByTestId('indicator');

    expect(para).toBeInTheDocument();
    expect(indicator).toBeInTheDocument();
});
