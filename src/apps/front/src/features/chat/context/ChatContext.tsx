import { createContext, ReactNode, useState, useEffect } from 'react';
import { baseUrl, getRequest, postRequest } from '../utils/service';

interface User {
  _id: string;
}

interface Chat {
  // 여기에 채팅 객체의 타입을 정의해주세요.
}

interface ChatContextProps {
  userChats: Chat[] | null;
  isUserChatsLoading: boolean;
  userChatsError: any; // 여기에 userChatsError의 타입을 정의해주세요.
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined,
);

interface ChatContextProviderProps {
  children: ReactNode;
  user: {
    _id: string; // 예시에 맞게 수정해주세요.
    user: User;
  };
}

export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({
  children,
  user,
}) => {
  const [userChats, setUserChats] = useState<Chat[] | null>(null);
  const [isUserChatsLoading, setIsUserChatsLoading] = useState<boolean>(false);
  const [userChatsError, setUserChatsError] = useState<any>(null);

  useEffect(() => {
    const getUserChats = async () => {
      if (user?._id) {
        try {
          setIsUserChatsLoading(true);
          setUserChatsError(null);

          const response = await getRequest(`${baseUrl}/chats/${user?._id}`);

          setIsUserChatsLoading(false);

          if (response.error) {
            return setUserChatsError(response);
          }

          setUserChats(response);
        } catch (error) {
          setIsUserChatsLoading(false);
          setUserChatsError(error);
        }
      }
    };

    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        isUserChatsLoading,
        userChatsError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
