import {
  Box,
  Container,
  Flex,
  TabIndicator,
  TabList,
  Tabs,
  useColorMode,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import React, { PropsWithChildren, useState } from "react";
import { useEffect } from "react";

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode();
  const [tabsIndex, setTabsIndex] = useState(0);

  useEffect(() => {
    window.localStorage.setItem("tabsIndex", String(tabsIndex));
  }, [tabsIndex]);

  return (
    <Box
      as="header"
      py={2}
      bg={colorMode === "dark" ? "teal.500" : "green.300"}
    >
      <Container maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <Tabs
            position="relative"
            variant="unstyled"
            onChange={(index) => setTabsIndex(index)}
            defaultIndex={Number(window.localStorage.getItem("tabsIndex"))}
          >
            <TabList>
              {React.Children.map(children, (child) => (
                <>
                  {child}
                </>
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
