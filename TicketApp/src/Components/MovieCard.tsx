import "./MovieCard.css";
import svg from "../assets/react.svg";
import lol from "../assets/lol.jpg";
import { useState } from "react";
function MovieCard() {
  const [image, setImage] = useState(false);
  return (
    <div id="movie-card">
      <div id="movie-card-image">
        <img src={image ? lol : svg} alt="" />
      </div>
      <div id="movie-card-content">
        <div>
          <div>Movie Name</div>
          <small>Language and Rating</small>
        </div>
        <br />
        <section>
          <button onClick={() => setImage(!image)}>Book Tickets</button>
        </section>
      </div>
    </div>
  );
}

export default MovieCard;
