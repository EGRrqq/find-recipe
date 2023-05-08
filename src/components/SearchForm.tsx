import { Formik, Field } from "formik";
import {
  Button,
  FormControl,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useSearch } from "../hooks/useSearch";

type SearchFormProps = {
  queryParam: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ queryParam }) => {
  const { setSearchParams, searchQuery } = useSearch(queryParam);

  return (
    <Formik
      enableReinitialize
      initialValues={{
        search: searchQuery,
      }}
      onSubmit={(values) => {
        setSearchParams({ recipe: values.search });
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <HStack spacing={4} margin='auto' maxW="50vw">
            <FormControl>
              <Field
                as={Input}
                id="search"
                name="search"
                type="search"
                variant="filled"
              />
            </FormControl>
            <Button type="submit" colorScheme="purple">
              search
            </Button>
          </HStack>
        </form>
      )}
    </Formik>
  );
};

export default SearchForm;
