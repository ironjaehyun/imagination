import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
