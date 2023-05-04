import {
  SimpleGrid, 
} from "@chakra-ui/react";

import { useGetRecipesQuery } from "../../services/recipesService";
import CardItem from "./CardItem";
import { useSearch } from "../../hooks/useSearch";

const CardList: React.FC = () => {
  const { query } = useSearch('recipe')
  const { data: list } = useGetRecipesQuery(query);

  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 5]} spacing={8} px="16">
        {list?.hits.map((item) => (
          <CardItem item={item} key={item.recipe.uri.split("#")[1]} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardList;
