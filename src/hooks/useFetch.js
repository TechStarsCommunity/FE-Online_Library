import useSWr, { preload } from "swr";

const fetcher = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const useFetch = (url) => {
    preload(url, fetcher);

    const { data, error, isValidating: isLoading } = useSWr(url, fetcher);

    return { data, error, isLoading };
};

export default useFetch;
