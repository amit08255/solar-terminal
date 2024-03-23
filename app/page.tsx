'use client';

import { Box, Container } from '@chakra-ui/react';
import Overview from '../components/Overview';
import SolarGrid from '../components/SolarGrid';
import usePanelUpdates from '../hooks/usePanelUpdates';

export default function Page() {
    const {
        latestData, totalOutputKWh, weakPanels, healthyPanels,
    } = usePanelUpdates();

    return (
        <>
            <Box bg="#ffd682fc" rounded="lg" overflow="hidden" w="100vw" h="100vh" position="fixed" top="0" left="0" right="0" bottom="0">
                <Box position="absolute" right="0" top="0" bottom="0" w="50%" bgImage="url(/images/wind-panel.jpg)" bgSize="contain" bgPos="bottom" bgRepeat="no-repeat" />
            </Box>
            <Container p="4" maxW="7xl" position="relative" zIndex="1">
                <Overview
                    totalYield={totalOutputKWh}
                    totalPanels={latestData.length}
                    healthyPanels={healthyPanels}
                    weakPanels={weakPanels}
                />
                <Box mt="12">
                    <SolarGrid data={latestData} />
                </Box>
            </Container>
        </>
    );
}
