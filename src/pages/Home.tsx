import { usePopularMovies } from "../hooks/useMovies";

export default function Home () {
  const {data, isLoading, isError} = usePopularMovies();

  return (
    <>
      <h1 className="text-white">Home Page</h1>
      {!isLoading && <p className="text-yellow-400">{JSON.stringify(data)}</p>}
      
    </>
  )
}