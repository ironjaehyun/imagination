import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
