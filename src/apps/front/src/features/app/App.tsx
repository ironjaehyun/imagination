import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Imagination from '../imagination/components/Imagination';
import Login from '../auth/login/components/Login';
import Join from '../auth/join/components/Join';
import Explore from '../feed/Explore';
import Chat from '../chat/Chat';
import Create from '../createBoardList/Create';
import Mypage from '../auth/mypage/Mypage';
import UserPage from '../auth/mypage/UserPage';
import Leader from '../leader/Leader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Feed from '../feed/Feed';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/feed" element={<Feed />} />
            <Route path="/" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/imagination" element={<Imagination />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/create" element={<Create />} />
            <Route path="/leader" element={<Leader />} />
            <Route path="/mypage/:id" element={<Mypage />} />
            <Route path="/userpage/:id" element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
