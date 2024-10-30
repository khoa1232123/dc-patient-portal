import { ArrowUpIcon } from "@/assets/svg";
import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Lắng nghe sự kiện scroll
    window.addEventListener("scroll", toggleVisibility);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top duration-200 ${
        isVisible ? "visible opacity-100" : "invisible opacity-0"
      }`}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        padding: "12px",
        backgroundColor: "#fff",
        color: "white",
        border: "none",
        borderRadius: "25px",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0px 4px 20px 0px #00000020",
      }}
    >
      <ArrowUpIcon width={24} height={24} />
    </button>
  );
};

export default ScrollToTop;
