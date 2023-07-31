import { Input } from "@/components/shared";
import { Flex, HStack, VStack, styled } from "@/panda/jsx";
import { center } from "@/panda/patterns";

const Navbar = () => {
  return (
    <styled.nav role={"navigation"} position={"sticky"} bg={"bg.emphasized"}>
      <Flex className={center({})}>
        <VStack my={40} w={"xl"}>
          <Input variant={"filled"} type="search" />
          <Input variant={"outline"} type="search" />
        </VStack>
      </Flex>
    </styled.nav>
  );
};

export default Navbar;
