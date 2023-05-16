import CardList from "./CardList";
import SearchForm from "../../components/SearchForm";

const SearchDataPage = () => {
  return (
    <>
        <SearchForm queryParam="recipe" />
        <CardList queryParam="recipe" />
    </>
  );
}

export default SearchDataPage;
