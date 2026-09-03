import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import MainLayout from './components/layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
    <div className="relative min-h-screen bg-black">
      <Header />
      <main>
        <MainLayout />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
