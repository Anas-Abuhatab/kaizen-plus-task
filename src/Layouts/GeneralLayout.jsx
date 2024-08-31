import { lazy, useEffect, useRef } from "react";
import ToolsPanel from "../components/ToolsPanel";

const Header = lazy(() => import("@/components/Header"));
const Footer = lazy(() => import("@/components/Footer"));

// eslint-disable-next-line react/prop-types
const GeneralLayout = ({ children }) => {
  const mainRef = useRef(null);
  useEffect(() => {
    const mainHeight = `calc(100vh - ${0 + 50}px)`;
    if (mainRef.current) {
      mainRef.current.style.minHeight = mainHeight;
    }
  }, []);

  return (
    <div className="w-100">
      <Header />
      <main ref={mainRef}>{children}</main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
