import { useEffect, useState } from "react";

export default function useWindowScroll() {
  const [scrollTop, setScrollTop] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollTop;
}
