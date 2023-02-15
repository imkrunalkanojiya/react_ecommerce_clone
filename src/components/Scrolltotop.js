import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// for render dom from top to bottom

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop