import { ArrowRightIcon } from "@/app/icons/ArrowRightIcon";
import { TestIcon } from "@/app/icons/TestIcon";
import { Input } from "@/components/shared";
import { Button } from "@/components/shared/Button";
import { IconButton } from "@/components/shared/IconButton";
import { css } from "@/panda/css";
import { Flex, VStack, panda } from "@/panda/jsx";
import { center } from "@/panda/patterns";

const Navbar = () => {
  return (
    <panda.nav role={"navigation"} position={"sticky"} bg={"bg.emphasized"}>
      <Flex className={center({})}>
        <VStack my={40} w={"xl"}>
          <Input
            type="search"
            placeholder="find recipe"
            size={"lg"}
            leftIcon={<TestIcon />}
            rightIcon={<ArrowRightIcon />}
          />
          <Input
            type="search"
            placeholder="find recipe"
            size={"lg"}
            variant={"outline"}
            leftIcon={<TestIcon />}
            rightIcon={<ArrowRightIcon />}
          />
        </VStack>

        <VStack my={40} w={"xl"}>
          <Button
            leftIcon={<TestIcon width={"25px"} height={"25px"} />}
            rightIcon={<ArrowRightIcon width={"25px"} height={"25px"} />}
          >
            yo
          </Button>

          <IconButton aria-label="test">
            <TestIcon className={css({ m: 1 })} />
          </IconButton>
        </VStack>
      </Flex>
    </panda.nav>
  );
};

export default Navbar;
