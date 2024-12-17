import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const useCustomHistory = () => {
  const navigate = useNavigate(); // Використовуємо useNavigate
  const [lastVisitTime, setLastVisitTime] = useState(null);

  // Функція для переходу на нову сторінку та збереження часу переходу
  const navigateTo = (path) => {
    setLastVisitTime(new Date().toLocaleString());
    navigate(path); // Використовуємо navigate
  };

  return { navigateTo, lastVisitTime }; // Повертаємо navigateTo замість navigate
};

export default useCustomHistory;
