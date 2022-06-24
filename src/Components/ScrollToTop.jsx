import React, { useState } from "react";
import scroll from "../assets/scroll.png"

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      {visible && (
        <div
          className=" fixed   bottom-[40px] lg:right-[40px] right-[10px] z-50 cursor-pointer flex justify-center items-center"
          onClick={scrollToTop}
        >
            <img src={scroll} alt="scroll" />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
