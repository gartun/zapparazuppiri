import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const paths = [];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    if(!paths.includes(pathname)) {
      window.scrollTo(0, 0);
      paths.push(pathname);
    }

    if(paths.length > 5) paths.shift();

  }, [pathname]);

  return null;
}

export default ScrollToTop;
