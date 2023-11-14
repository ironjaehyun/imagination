import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Imagination from '../imagination/components/Imagination';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';
import Chat from '../chat/Chat';
import Create from '../createBoardList/Create';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/imagination" element={<Imagination />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
