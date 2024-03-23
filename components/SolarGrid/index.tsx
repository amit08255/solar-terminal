import * as React from 'react';
import {
    Box, Grid, GridItem, Text,
} from '@chakra-ui/react';

type Props = {
    data: Array<{
        id: number|string,
        wattage: number,
        voltage: number,
    }>,
};

function SolarGrid({ data }:Props) {
    return (
        <Box rounded="lg" w="full" pb="4" bg="white" shadow="md" border="1.5px" borderColor="gray.100">
            <Text borderTopLeftRadius="lg" borderTopRightRadius="lg" bg="blackAlpha.100" fontSize="md" fontWeight="bold" mb="6" px="4" py="3">Panel Monitoring Grid</Text>
            <Grid px="4" templateColumns={{ sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)', lg: 'repeat(6, 1fr)' }} gap={2}>
                {
                    data.map((item) => (
                        <GridItem
                            data-testid="solar-grid-cell"
                            rounded="md"
                            key={item.id}
                            p="2"
                            data-bgcolor={item.voltage < 10 && item.wattage < 200 ? 'weak' : 'healthy'}
                            textAlign="center"
                            fontSize="xs"
                            fontWeight="bold"
                            color="white"
                        >
                            <Text>
                                {`${item.voltage} V`}
                            </Text>
                            <Text>
                                {`${item.wattage} W`}
                            </Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SolarGrid;
