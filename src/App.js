import { Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import Navbar from './modules/Navbar/Navbar';
import Countries from './modules/Countries/Countries';
import Details from './modules/Details/Details';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:continent" element={<Countries />} />
        <Route path="/:continent/:country" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

// 80a504136ef8fec9a3ecbfa7bada1535
