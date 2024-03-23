import {Box, Container, Text} from "@chakra-ui/react";
import Overview from "../components/Overview";
import panelDataGenerator from "../utilities/panelDataGenerator";
import SolarGrid from "../components/SolarGrid";

export default function Page() {
    const dataList = panelDataGenerator();

    return (
        <>
            <Box bg="#ffd682fc" rounded="lg" overflow="hidden" w="100vw" h="100vh" position="fixed" top="0" left="0" right="0" bottom="0">
                <Box position="absolute" right="0" top="0" bottom="0" w="50%" bgImage="url(/images/wind-panel.jpg)" bgSize="contain" bgPos="bottom" bgRepeat="no-repeat" />
            </Box>
            <Container p="4" maxW="7xl" position="relative" zIndex="1">
                <Overview />
                <Box mt="12">
                    <SolarGrid data={dataList} />
                </Box>
            </Container>
        </>
    );
}
