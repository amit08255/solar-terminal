import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {useEffect, useState} from "react";

const usePanelUpdates = () => {
    const [latestData, setLatestData] = useState([]);
    const [totalYield, setTotalYield] = useState(0);
    const [weakPanels, setWeakPanels] = useState(0);
    const [healthyPanels, setHealthyPanels] = useState(0);
    const { data } = useQuery({
        queryKey: ['updates'],
        queryFn: async () => {
            const res = await axios.get('/api/updates');
            return res.data;
        },
        // Refetch the data every second
        refetchInterval: 5000,
    });

    useEffect(() => {
        if (data) {
            let totalOutput = totalYield;
            const latest = data.slice(-30);
            let weakPanelsCount = 0;
            let healthyPanelsCount = 0;

            latest.forEach(panel => {
                if (panel.voltage < 10 && panel.wattage < 200) {
                    weakPanelsCount += 1;
                } else {
                    healthyPanelsCount += 1;
                }

                totalOutput += parseFloat(panel.wattage);
            });

            const totalOutputInKWh = totalOutput / 1000;

            setTotalYield(parseFloat(totalOutputInKWh.toFixed(2)));
            setWeakPanels(weakPanelsCount);
            setHealthyPanels(healthyPanelsCount);
            setLatestData(data.slice(-30));
        }
    }, [data]);

    return { latestData, totalYield, weakPanels, healthyPanels };
};

export default usePanelUpdates;
