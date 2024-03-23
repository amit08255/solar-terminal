import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    label: string;
    value: string|number;
    unit: string;
    color?: string;
}

function OverviewStatsText({
    color, value, unit, label,
}:Props) {
    return (
        <Box data-testid="overview-text-stats" display="flex" alignItems="center" pb="4">
            <Text fontSize="sm" color={color}>{label}</Text>
            <Text ml="1.5" fontSize="md" fontWeight="bold">{value}</Text>
            <Text ml="1.5" color="blackAlpha.600" fontSize="md" fontWeight="bold">{unit}</Text>
        </Box>
    );
}

OverviewStatsText.defaultProps = {
    color: 'blackAlpha.500',
};

export default OverviewStatsText;
