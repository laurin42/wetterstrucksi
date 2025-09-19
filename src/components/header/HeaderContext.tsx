"use client";
import {
  createContext,
  useContext,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import Header from "./Header";

interface HeaderContextProps {
  headerHeight: number;
  headerRef: React.RefObject<HTMLElement | null>;
}

const HeaderContext = createContext<HeaderContextProps>({
  headerHeight: 0,
  headerRef: { current: null },
});

export const useHeader = () => useContext(HeaderContext);

export function HeaderProvider({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef }}>
      <Header ref={headerRef} onHeightChange={setHeaderHeight} />
      {children}
    </HeaderContext.Provider>
  );
}
