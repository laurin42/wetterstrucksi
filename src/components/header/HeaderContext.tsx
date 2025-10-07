"use client";

import { createContext, useContext, useRef, useState } from "react";
import Header from "./Header";

interface HeaderContextProps {
  headerHeight: number;
}

const HeaderContext = createContext<HeaderContextProps>({
  headerHeight: 0,
});

export const useHeader = () => useContext(HeaderContext);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);

  return (
    <HeaderContext.Provider value={{ headerHeight }}>
      <Header
        ref={headerRef}
        onHeightChange={(height) => setHeaderHeight(height)}
      />
      {children}
    </HeaderContext.Provider>
  );
}
