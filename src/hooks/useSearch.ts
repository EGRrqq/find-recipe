import { useSearchParams } from "react-router-dom";

export const useSearch = ( queryParam: string ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get(queryParam) || "";

    return { setSearchParams, searchQuery }
}

