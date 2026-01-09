import { useState } from 'react';
import arrow_up3 from '../assets/arrow_up3.png';

const GoToTopBtn = () => {
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 1224) {
      setShowScrollTopBtn(true);
    } else {
      setShowScrollTopBtn(false);
    }
  });

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showScrollTopBtn === true ? (
        <div className="bg-[#ec5b53] text-white rounded-full p-2 fixed bottom-7 right-3 cursor-pointer animate-pulse">
          <img
            className="w-6"
            src={arrow_up3}
            alt="arrow-up"
            onClick={ScrollToTop}
          />
        </div>
      ) : (
        <div>{null}</div>
      )}
    </div>
  );
};

export default GoToTopBtn;
