import { Routes, Route } from 'react-router-dom';
import Home from './modules/Home/Home';
import Navbar from './modules/Navbar/Navbar';
import Countries from './modules/Countries/Countries';

function App() {
  const paths = [
    '/africa',
    '/asia',
    '/southamerica',
    '/northamerica',
    'europe',
    '/oceania',
  ];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {paths.map((path) => (
          <Route key={path} exact path={path} element={<Countries />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;

// 80a504136ef8fec9a3ecbfa7bada1535
