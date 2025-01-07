import { useState } from "react";
import Navbar from "./components/Navbar";
import ListBox from "./components/ListBox";
import NumResult from "./components/NumResult";
import Search from "./components/Search";
 
import WatchedSummary from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
import MoviesList from "./components/MoviesList";
import Box from "./components/Box";

const tempMovieData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    },
    {
      imdbID: "tt0133093",
      Title: "The Matrix",
      Year: "1999",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
      imdbID: "tt6751668",
      Title: "Parasite",
      Year: "2019",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
  ];
  
  const tempWatchedData = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      runtime: 148,
      imdbRating: 8.8,
      userRating: 10,
    },
    {
      imdbID: "tt0088763",
      Title: "Back to the Future",
      Year: "1985",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      runtime: 116,
      imdbRating: 8.5,
      userRating: 9,
    },
  ];


export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
      const [watched, setWatched] = useState(tempWatchedData);
    
     

  return (
    <>
 <Navbar >
 <Search /> 
 <NumResult movies={movies}/>
  </Navbar> 
<ListBox    >
  
  <Box> 
<MoviesList movies={movies} /> 
</Box>

<Box>

<WatchedSummary watched={watched} />
<WatchedList  watched={watched}/> 

</Box> 
{/* <Box element={<MoviesList movies={movies} /> } /> 
<Box element={
  <>
  <WatchedSummary watched={watched} />
<WatchedList  watched={watched}/> </>} 
/>  */}
  </ListBox>
    </>
  );
}
