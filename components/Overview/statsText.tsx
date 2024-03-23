import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    label: string;
    value: string|number;
    unit: string;
    color?: string;
    ml?: string;
}

function OverviewStatsText({
    color, ml, value, unit, label,
}:Props) {
    return (
        <Box display="flex" alignItems="center">
            <Text ml={ml} fontSize="sm" color={color}>{label}</Text>
            <Text ml="1.5" fontSize="md" fontWeight="bold">{value}</Text>
            <Text ml="1.5" color="blackAlpha.600" fontSize="md" fontWeight="bold">{unit}</Text>
        </Box>
    );
}

OverviewStatsText.defaultProps = {
    ml: '0',
    color: 'blackAlpha.500',
};

export default OverviewStatsText;
