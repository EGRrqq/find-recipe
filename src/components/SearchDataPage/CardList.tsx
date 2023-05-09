import {
  Alert,
  AlertIcon,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

import {
  // useGetNewPageRecipesQuery,
  useGetRecipesQuery,
} from "../../services/recipesService";
import CardItem from "./CardItem";
import { useSearch } from "../../hooks/useSearch";

type CardListProps = {
  queryParam: string;
};

const CardList: React.FC<CardListProps> = ({ queryParam }) => {
  const { searchQuery } = useSearch(queryParam);
  const {
    data: list,
    isLoading,
    error: listError,
    isError,
  } = useGetRecipesQuery(searchQuery);

  // const newPageUrl = list?._links.next.href.split("?")[1];
  // const { data: newPageList } = useGetNewPageRecipesQuery(newPageUrl);
  // const newPageUrl2 = newPageList?._links.next.href.split("?")[1];
  //mb recursion
  return (
    <>
      {isLoading && (
        <Center>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}

      {isError && (
        <Center>
          <Alert status="error">
            <AlertIcon />
            {listError.error}
          </Alert>
        </Center>
      )}

      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={8} px="16">
        {list?.hits.map((item) => (
          <CardItem item={item} key={item.recipe.uri.split("#")[1]} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardList;
