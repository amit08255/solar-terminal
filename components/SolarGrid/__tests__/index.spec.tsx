import * as React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SolarGrid from 'components/SolarGrid';

const data = [
    {
        id: 1,
        voltage: 10,
        wattage: 100,
    },
    {
        id: 2,
        voltage: 20,
        wattage: 200,
    },
    {
        id: 3,
        voltage: 30,
        wattage: 300,
    },
    {
        id: 4,
        voltage: 40,
        wattage: 400,
    },
    {
        id: 5,
        voltage: 50,
        wattage: 500,
    },
    {
        id: 6,
        voltage: 60,
        wattage: 600,
    },
    {
        id: 7,
        voltage: 70,
        wattage: 700,
    },
    {
        id: 8,
        voltage: 8,
        wattage: 80,
    },
    {
        id: 9,
        voltage: 90,
        wattage: 900,
    },
    {
        id: 10,
        voltage: 100,
        wattage: 1000,
    },
    {
        id: 11,
        voltage: 10,
        wattage: 100,
    },
    {
        id: 12,
        voltage: 20,
        wattage: 200,
    },
    {
        id: 13,
        voltage: 30,
        wattage: 300,
    },
    {
        id: 14,
        voltage: 4,
        wattage: 40,
    },
    {
        id: 15,
        voltage: 50,
        wattage: 500,
    },
    {
        id: 16,
        voltage: 60,
        wattage: 600,
    },
    {
        id: 17,
        voltage: 70,
        wattage: 700,
    },
    {
        id: 18,
        voltage: 80,
        wattage: 800,
    },
    {
        id: 19,
        voltage: 90,
        wattage: 900,
    },
    {
        id: 20,
        voltage: 100,
        wattage: 1000,
    },
    {
        id: 21,
        voltage: 10,
        wattage: 100,
    },
    {
        id: 22,
        voltage: 20,
        wattage: 200,
    },
    {
        id: 23,
        voltage: 30,
        wattage: 300,
    },
    {
        id: 24,
        voltage: 40,
        wattage: 400,
    },
    {
        id: 25,
        voltage: 50,
        wattage: 500,
    },
    {
        id: 26,
        voltage: 60,
        wattage: 600,
    },
    {
        id: 27,
        voltage: 7,
        wattage: 70,
    },
    {
        id: 28,
        voltage: 80,
        wattage: 800,
    },
    {
        id: 29,
        voltage: 90,
        wattage: 900,
    },
    {
        id: 30,
        voltage: 100,
        wattage: 1000,
    },
];

test('Solar Grid is rendering the panel grid correctly', () => {
    render(
        <SolarGrid data={data} />,
    );

    const solarGridCells = screen.getAllByTestId('solar-grid-cell');

    for (let i = 0; i < 30; i += 1) {
        expect(solarGridCells[i]).toHaveTextContent(`${data[i].voltage} V`);
        expect(solarGridCells[i]).toHaveTextContent(`${data[i].wattage} W`);
        expect(solarGridCells[i]).toHaveAttribute('data-bgcolor', data[i].voltage < 10 && data[i].wattage < 200 ? 'weak' : 'healthy');
    }
});
