import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from '../feed/Feed';
import Create from '../create/Create';
import Chat from '../chat/Chat';
import Imagination from '../imagination/Imagination';
import Leader from '../leader/Leader';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';
import Login from '../auth/login/components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/feed" element={<Feed></Feed>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/join" element={<Join></Join>}></Route>
          <Route
            path="/imagination"
            element={<Imagination></Imagination>}
          ></Route>
          <Route path="/leader" element={<Leader></Leader>}></Route>
          <Route path="/create" element={<Create></Create>}></Route>
          <Route path="/chat" element={<Chat></Chat>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
