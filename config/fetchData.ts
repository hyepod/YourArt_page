import axios from "axios";
import useSWR from "swr";

export const client = axios.create({
  baseURL: "https://storage.googleapis.com",
  // headers: {
  //   post: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // },
});

const fetcher = (url: string) => client.get(url).then((res) => res.data);

interface DataResponse<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: any;
}

export function useFetchData<T>(url: string | null): DataResponse<T> {
  const { data, error } = useSWR<T>(url, fetcher);
  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
