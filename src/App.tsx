import './App.css';
import { useUpcomingMovies } from './hooks/useMovies';

function App() {
  const { data, isLoading, isError } = useUpcomingMovies()

  return (
    <>
    <h1>App</h1>
    <div>
      {isLoading}
      {JSON.stringify(data)}
      {isError}
    </div>
    </>
  );
}

export default App;
