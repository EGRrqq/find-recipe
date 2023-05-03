import { SimpleGrid, Image, useColorMode, Text, Card, CardBody, Stack, Divider, CardFooter, Heading } from "@chakra-ui/react";

import { useGetRecipesQuery } from "../services/recipesService";

const Data: React.FC = () => {
  const { data } = useGetRecipesQuery("");
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid 
      columns={[1, 2, 3, 5]} 
      spacing={8} 
      px='16' 
      py='16'
    >

        {data?.hits.map((item) => (
          <Card 
            key={item.recipe.uri.split("#")[1]} 
            bg={colorMode === 'light' ? 'yellow.300' : 'green.300'} 
            maxW='sm'
          >
            <CardBody>
              <Stack mt='6' spacing='3'>
                <Image src={item.recipe.image} alt='recipe image' borderRadius='lg' />
                <Heading size='md'>{item.recipe.label}</Heading>
              </Stack>
            </CardBody>

            <Divider />

            <CardFooter>
              <Text>footer</Text>
            </CardFooter>

          </Card>
        ))}
        
    </SimpleGrid>
  );
};

export default Data;
