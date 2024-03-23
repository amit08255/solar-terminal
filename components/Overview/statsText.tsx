import * as React from 'react';
import {Box, Text} from "@chakra-ui/react";

type Props = {
    color: string;
    label: string;
    value: string|number;
    unit: string;
    ml?: string;
}

const OverviewStatsText = ({
    color, ml, value, unit, label,
}:Props) => (
    <Box display="flex" alignItems="center">
        <Text ml={ml} fontSize="sm" color={color}>{label}</Text>
        <Text ml="1.5" fontSize="md" fontWeight="bold">{value}</Text>
        <Text ml="1.5" color="blackAlpha.600" fontSize="md" fontWeight="bold">{unit}</Text>
    </Box>
);

OverviewStatsText.defaultProps = {
    ml: '0',
};

export default OverviewStatsText;
