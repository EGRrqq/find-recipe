import { useSearchParams } from "react-router-dom";

export const useSearch = ( queryParam: string ) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get(queryParam) || "";

    return { setSearchParams, query }
}

