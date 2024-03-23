import * as React from 'react';
import {
    Box, Grid, GridItem, Text,
} from '@chakra-ui/react';

type Props = {
    data: Array<{
        id: number|string,
        time: string,
        wattage: number,
        voltage: number,
    }>,
};

function SolarGrid({ data }:Props) {
    return (
        <Box rounded="lg" w="full" pb="4" bg="white" shadow="md" border="1.5px" borderColor="gray.100">
            <Text borderTopLeftRadius="lg" borderTopRightRadius="lg" bg="blackAlpha.100" fontSize="md" fontWeight="bold" mb="6" px="4" py="3">Panel Monitoring Grid</Text>
            <Grid px="4" templateColumns="repeat(6, 1fr)" gap={2}>
                {
                    data.map((item) => (
                        <GridItem
                            rounded="md"
                            key={`${item.id}-${item.time}`}
                            p="2"
                            bg={item.voltage < 10 && item.wattage < 200 ? 'red.400' : 'green.400'}
                            textAlign="center"
                            fontSize="xs"
                            fontWeight="bold"
                            color="white"
                        >
                            <Text>
                                {item.voltage}
                                {' '}
                                V
                            </Text>
                            <Text>
                                {item.wattage}
                                {' '}
                                W
                            </Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    );
}

export default SolarGrid;
