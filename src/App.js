import './App.css';
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className={"main"}>
        <div className={"tabs"}>
        <div className={"tabs"}>Movies</div>
        <div className={"tabs"}>Favourites</div>
        <div className={"list"}>
            {data.map(movie => (
              <MovieCard movie = {movie} />
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
