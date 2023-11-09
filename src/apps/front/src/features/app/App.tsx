import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Imagination from '../imagination/components/Imagination';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/imagination" element={<Imagination />}></Route>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/explore" element={<Explore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
