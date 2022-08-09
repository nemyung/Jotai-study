import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'jotai';
import Home from './Home';
import Basic2 from './Basic2';
import Links from './Links';
import Async1 from './Async1';

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />}>
          <Route
            index
            element={
              <Provider>
                <Home />
              </Provider>
            }
          />
          <Route path="Basic2" element={<Basic2 />} />
          <Route path="async1" element={<Async1 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
