import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Create from '../createList/Create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
