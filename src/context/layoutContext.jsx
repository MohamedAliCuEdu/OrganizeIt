import React, { createContext, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

const LayoutContext = createContext({});

export function LayoutProvider({ children }) {
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const [navDisplay, setNavDisplay] = useState(false);
  const windowDimensions = useWindowDimensions();

  const handleOverlayDisplay = React.useCallback(() => {
    setOverlayDisplay(!overlayDisplay);
  }, [overlayDisplay]);
  
  const handleNavDisplay = React.useCallback(() => {
    setNavDisplay(!navDisplay);
  }, [navDisplay]);

  // for stop nav display when resize to large screen, and back to small screen:
  useEffect(() => {
    windowDimensions.width > 768 && setNavDisplay(false);
  }, [windowDimensions]);

  return (
    <LayoutContext.Provider
      value={{
        overlayDisplay,
        handleOverlayDisplay,
        navDisplay,
        handleNavDisplay,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

export default LayoutContext;
