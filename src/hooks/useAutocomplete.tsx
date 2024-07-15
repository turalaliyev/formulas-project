import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchSuggestions = async (query: string) => {
  const response = await axios.get(
    `https://api.example.com/autocomplete?query=${query}`
  );
  return response.data;
};

export const useAutocomplete = (query: string) => {
  return useQuery({
    queryKey: ["autocomplete", query],
    queryFn: () => fetchSuggestions(query),
    enabled: !!query,
  });
};
