import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Добавляем событие для прокрутки после полной загрузки страницы
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
    };
  }, [location]);

  return null;
}

export default ScrollToHash;
