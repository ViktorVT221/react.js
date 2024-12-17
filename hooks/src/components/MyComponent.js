import React from 'react';
import useCustomHistory from '../hooks/useCustomHistory';  // імпортуємо кастомний хук

const MyComponent = () => {
  const { navigate, lastVisitTime } = useCustomHistory();

  return (
    <div>
      <button onClick={() => navigate('/home')}>Go to Home</button>
      <button onClick={() => navigate('/about')}>Go to About</button>

      {lastVisitTime && (
        <p>Last visited at: {lastVisitTime}</p>
      )}
    </div>
  );
};

export default MyComponent;
