import * as React from 'react';
import { Box } from '@chakra-ui/react';
import OverviewIndicatorText from './indicatorText';
import OverviewStatsText from './statsText';

type Props = {
    totalPanels: number,
    weakPanels: number,
    healthyPanels: number,
    totalYield: number,
}

function Overview({
    totalPanels, weakPanels, healthyPanels, totalYield,
}:Props) {
    return (
        <Box
            pt="4"
            px="6"
            w="full"
            rounded="lg"
            bg="white"
            shadow="md"
            border="1.5px"
            borderColor="gray.100"
            display="flex"
            alignItems="center"
            flexWrap="wrap"
        >
            <OverviewIndicatorText mr="10" color="blackAlpha.500" text={`${totalPanels} Total Panels`} />
            <OverviewIndicatorText mr="10" className="glow-weak" color="red.500" text={`${weakPanels} Weak Panels`} />
            <OverviewIndicatorText mr="10" className="glow-healthy" color="green.500" text={`${healthyPanels} Healthy Panels`} />
            <OverviewStatsText unit="kWh" color="blackAlpha.600" label="Total Yield" value={totalYield} />
        </Box>
    );
}

export default Overview;
