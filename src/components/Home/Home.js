import Movies from "../Movies/Movies";
import Tvshows from "../TvShows/Tvshows";
import People from "../People/People";

function Home() {
  let itmeNUmbers = 10;
  return (
    <>
      <Movies itmeNUmbers={itmeNUmbers} />
      <Tvshows itmeNUmbers={itmeNUmbers} />
      <People itmeNUmbers={itmeNUmbers} />
    </>
  );
}

export default Home;
