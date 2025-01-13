import { useEffect, useState } from "react";

const KEY = "f84fc31d";

export function useMovie(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [movies, setMovies] = useState([]);
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setIsError("");
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        {
          signal: controller.signal,
        }
      );
      if (!res.ok) {
        throw new Error("Some Thing Went Wrong");
      }
      const data = await res.json();
      if (data.Response === "False") throw new Error("Failed to Fetch data");
      setMovies(data.Search);
      setIsLoading(false);
    } catch (err) {
      if (err.name !== "AbortError") {
        setIsError(err.message);
      }
    } finally {
      setIsLoading(false);

      setIsError("");
    }
  };
  useEffect(() => {
    if (!query.length) {
      setMovies([]);
      setIsError("");
      return;
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [query]);
  return { isLoading, isError, movies };
}
