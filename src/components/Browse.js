import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainCointainer from "./MainCointainer";
import SecondaryCointainer from "./SecondaryCointainer";

const Browse = () => {
useNowPlayingMovies();
 
  return (
    <div>
      <Header/>
      <MainCointainer />
      <SecondaryCointainer />
    </div>
  )
}

export default Browse