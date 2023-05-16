import { Link, Outlet } from "react-router-dom";

import { Box, Stack, Tab } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import Fallback from "./Fallback";

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

          <Suspense fallback={<Fallback />}>
            <Outlet />
          </Suspense>

          <Footer />
        </Stack>
      </Box>
    </>
  );
};

export default Layout;
