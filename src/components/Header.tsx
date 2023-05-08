import { Box, Container, Flex, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import React, { PropsWithChildren } from "react";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      py={2}
      bg={colorMode === "dark" ? "teal.500" : "green.300"}
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Tabs position="relative" variant="unstyled">
            <TabList>
                {React.Children.map(children, child => (
                    <Tab>
                        {child}
                    </Tab>
                ))}
            </TabList>
            
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="cyan.50"
              borderRadius="1px"
            />
          </Tabs>

          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
