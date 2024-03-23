import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    text: string;
    color?: string;
    className?: string;
    mr?: string;
};

function OverviewIndicatorText({
    color, text, className, mr,
}:Props) {
    return (
        <Box data-testid="overview-indicator-stats" pb="4" display="flex" alignItems="center" minW="max-content">
            <Box
                data-testid="indicator"
                height="8px"
                width="8px"
                borderRadius="50%"
                bg={color}
                className={className}
            />
            <Text ml="1.5" fontSize="md" fontWeight="bold" mr={mr}>{text}</Text>
        </Box>
    );
}

OverviewIndicatorText.defaultProps = {
    className: '',
    mr: '0',
    color: 'blackAlpha.500',
};

export default OverviewIndicatorText;
