import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Imagination from '../imagination/components/Imagination';
import Chat from '../chat/components/ChatList';
import Create from '../createBoardList/Create';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';

import Chat from '../chat/components/ChatList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/imagination" element={<Imagination />}></Route>
          <Route path="/explore" element={<Explore />} />
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
