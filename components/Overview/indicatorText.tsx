import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    text: string;
    color?: string;
    className?: string;
    ml?: string;
};

function OverviewIndicatorText({
    color, text, className, ml,
}:Props) {
    return (
        <Box display="flex" alignItems="center">
            <Box
                data-testid="indicator"
                height="8px"
                width="8px"
                borderRadius="50%"
                bg={color}
                className={className}
                ml={ml}
            />
            <Text ml="1.5" fontSize="md" fontWeight="bold">{text}</Text>
        </Box>
    );
}

OverviewIndicatorText.defaultProps = {
    className: '',
    ml: '0',
    color: 'blackAlpha.500',
};

export default OverviewIndicatorText;
