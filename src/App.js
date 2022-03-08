import { Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import Navbar from './modules/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

// 80a504136ef8fec9a3ecbfa7bada1535
