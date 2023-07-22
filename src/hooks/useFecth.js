import { useQuery } from "react-query";

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const useFetch = (url) => {
    const { data, error, isLoading } = useQuery(url, fetcher);

    return { data, error, isLoading };
};

export default useFetch;
