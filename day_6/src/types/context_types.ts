import { type ReactNode } from "react";


export interface ThemeContextType {
  theme: string;

  handleToggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}


