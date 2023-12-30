import MovieCard from "../Components/MovieCard";
import Navbar from "../Components/Navbar";
import "./Home.css";

function Home() {
  return (
    <div id="home">
      <section>
        <h1>Movies</h1>
        <section id="movies-section">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </section>
      </section>
    </div>
  );
}

export default Home;
