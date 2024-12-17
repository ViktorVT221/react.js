import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useCustomHistory from './hooks/useCustomHistory';
import NewPage from './components/NewPage';
import About from './components/About';
import Home from './components/Home';

function App() {
  const { navigateTo, lastVisitTime } = useCustomHistory();

  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>Last visit time: {lastVisitTime}</p>
      <button className="new-page-btn" onClick={() => navigateTo('/newpage')}>Go to New Page</button>
      <button className="home-btn" onClick={() => navigateTo('/')}>Go to Home</button>
      <button className="about-btn" onClick={() => navigateTo('/about')}>Go to About</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
