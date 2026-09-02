import './App.css';
import Header from './components/layout/Header';
import Layout from './routes/AppRouter';

function App() {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <main>
        <Layout />
      </main>
    </div>
  );
}

export default App;
