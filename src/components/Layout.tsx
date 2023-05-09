import { Box, Stack, Tab } from "@chakra-ui/react";
import Header from "./Header";

import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Box>
        <Stack spacing={8} minH="100vh">
          <Header>
            <Link to="/">
              <Tab>Home</Tab>
            </Link>

            <Link to="/recipes">
              <Tab>Recipes</Tab>
            </Link>
          </Header>

          <Outlet />

          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
