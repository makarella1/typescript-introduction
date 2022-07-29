import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};

export default App;
