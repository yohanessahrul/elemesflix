import { usePopularMovies } from "../hooks/useMovies";
import { useTopRatedTv } from "../hooks/useTvShows";

export default function TvShowPage () {
  const {data, isLoading, isError} = useTopRatedTv();
  return (
    <>
      <h1 className="text-white">TV Show Page</h1>
      {!isLoading && <p className="text-yellow-400">{JSON.stringify(data)}</p>}
    </>
  )
}