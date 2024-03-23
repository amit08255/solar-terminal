import * as React from 'react';
import {Box, Text} from "@chakra-ui/react";

type Props = {
    color: string;
    text: string;
    className?: string;
    ml?: string;
};

const OverviewIndicatorText = ({ color, text, className, ml }:Props) => (
    <Box display="flex" alignItems="center">
        <Box
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

OverviewIndicatorText.defaultProps = {
    className: '',
    ml: '0',
};

export default OverviewIndicatorText;
