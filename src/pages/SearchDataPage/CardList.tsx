import {
  Alert,
  AlertIcon,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";

import CardItem from "./CardItem";
import { useSearch } from "../../hooks/useSearch";

import { useFetching } from "../../hooks/useInfiniteScroll";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchRecipes } from "../../store/features/recipeSlice";
import { useEffect } from "react";
import Fallback from "../../components/Fallback";

type CardListProps = {
  queryParam: string;
};

const CardList: React.FC<CardListProps> = ({ queryParam }) => {
  const { searchQuery } = useSearch(queryParam);

  const {recipes, error, loading} = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes(`&q=${searchQuery}`));
  }, [dispatch, searchQuery]);

  const { ref } = useFetching(recipes, loading);

  return (
    <>
      {loading && (
        <Fallback />
      )}

      {error && (
        <Center>
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        </Center>
      )}

      <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={8} px="16">
        {recipes?.map((item) =>
          item.hits.map((hits) => (
            <CardItem item={hits} key={hits.recipe.uri.split("#")[1]} />
          ))
        )}
      </SimpleGrid>

      {!loading && !searchQuery && recipes.length && (
        <div ref={ref} style={{ height: 20, background: "red" }}></div>
      )}
    </>
  );
};

export default CardList;
