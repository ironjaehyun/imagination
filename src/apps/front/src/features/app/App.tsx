import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Feed from '../feed/Feed';
import Create from '../create/Create';
import Chat from '../chat/chat';
import Login from '../auth/login/login';
import Imagination from '../imagination/Imagination';
import Leader from '../leader/leader';
import Mypage from '../auth/mypage/mypage';
import Explore from '../feed/explore';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/feed" element={<Feed></Feed>}></Route>
          <Route path="/explore" element={<Explore></Explore>}></Route>
          <Route path="/join" element={<Join></Join>}></Route>
          <Route path="/mypage" element={<Mypage></Mypage>}></Route>
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
