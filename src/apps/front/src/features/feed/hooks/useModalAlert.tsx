// useModalAlert.tsx
import { useState } from 'react';

const useModalAlert = () => {
  const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
  };

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  return { isAlertOpen, handleOpenAlert, handleCloseAlert };
};

export default useModalAlert;
