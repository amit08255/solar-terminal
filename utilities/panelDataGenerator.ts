import moment from 'moment';
import panels from '../data';

const freshData:Array<{
    id: number,
    date: string,
    time: string,
    energy: string,
    efficiency: string,
    wattage: string,
    voltage: string,
}> = [];

function random(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(2);
}

function panelDataGenerator() {
    panels.data.forEach((panel) => {
        freshData.push({
            ...panel,
            time: moment().toISOString(),
            wattage: random(0, 400),
            voltage: random(0, 20),
        });
    });

    return freshData;
}

export default panelDataGenerator;
