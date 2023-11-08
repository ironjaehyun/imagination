import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Chat from '../chat/components/ChatList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat></Chat>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
