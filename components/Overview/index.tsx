import * as React from 'react';
import {Box, Text} from "@chakra-ui/react";
import OverviewIndicatorText from "./indicatorText";
import OverviewStatsText from "./statsText";

const Overview = () => (
    <Box
        py="4"
        px="6"
        w="full"
        rounded="lg"
        bg="white"
        shadow="md"
        border="1.5px"
        borderColor="gray.100"
        display="flex"
        alignItems="center"
    >
        <OverviewIndicatorText color="blackAlpha.500" text="30 Total Panels" />
        <OverviewIndicatorText ml="10" className="glow-weak" color="red.500" text="10 Weak Panels" />
        <OverviewIndicatorText ml="10" className="glow-healthy" color="green.500" text="10 Healthy Panels" />
        <OverviewStatsText unit="kWh" color="blackAlpha.600" label="Total Yield" value="4500" ml="10" />
    </Box>
);

export default Overview;
