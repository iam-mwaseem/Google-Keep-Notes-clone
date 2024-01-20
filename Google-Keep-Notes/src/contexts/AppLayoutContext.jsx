import { createContext, useContext, useState } from "react";

const AppLayoutContext = createContext();

function AppLayoutProvider({ children }) {
  const [sidebar, setSideBar] = useState(false);

  return (
    <AppLayoutContext.Provider
      value={{
        sidebar,
        setSideBar,
      }}
    >
      {children}
    </AppLayoutContext.Provider>
  );
}

function useAppLayout() {
  const context = useContext(AppLayoutContext);
  return context;
}
export { AppLayoutProvider, useAppLayout };
