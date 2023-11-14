import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';

import Chat from '../chat/components/ChatList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat></Chat>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
