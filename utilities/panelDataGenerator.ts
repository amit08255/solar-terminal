import panels from '../data.js';
import moment from 'moment';

const freshData = [];

function random(min,max){
    return (Math.random()*(max-min+1)+min).toFixed(2);
}

function panelDataGenerator(){
    panels.data.forEach(panel => {
        freshData.push({
            ...panel,
            time: moment().toISOString(),
            wattage: random(0, 400),
            voltage: random(0,20)
        });
    });

    return freshData;
}

export default panelDataGenerator;
