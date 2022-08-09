import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Basic2 from './Basic2';
import Links from './Links';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />}>
          <Route index element={<Home />} />
          <Route path="Basic2" element={<Basic2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
