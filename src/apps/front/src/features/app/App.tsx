import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Imagination from '../imagination/Imagination';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/imagination" element={<Imagination></Imagination>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
