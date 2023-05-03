import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import React from "react";

const Header: React.FC = () => {
    const { colorMode } = useColorMode();

  return (
    <Box as="header" py={2} bg={colorMode === 'dark' ? 'teal.500' : 'green.300'}>
        <Container maxW='container.xl'>
            <Flex justifyContent='space-between' alignItems='center'>
                <ColorModeSwitcher />
            </Flex>
        </Container>
    </Box>
    );
};

export default Header;
