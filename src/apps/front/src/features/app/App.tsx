import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from '../chat/components/ChatList';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
