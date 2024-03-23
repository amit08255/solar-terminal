import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Overview from 'components/Overview/index';

test('Overview should render correctly', () => {
    render(
        <Overview
            totalPanels={30}
            weakPanels={10}
            healthyPanels={20}
            totalYield={100}
        />,
    );

    const para = screen.getByText(/30 total panels/i);
    const indicator = screen.getAllByTestId('indicator');
    const weak = screen.getByText(/10 weak panels/i);
    const healthy = screen.getByText(/20 healthy panels/i);

    expect(para).toBeInTheDocument();
    expect(indicator.length).toBe(3);
    expect(weak).toBeInTheDocument();
    expect(healthy).toBeInTheDocument();
});
