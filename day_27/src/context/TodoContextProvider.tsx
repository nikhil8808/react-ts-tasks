import React, { createContext, useState } from "react";

interface TodoContextType {
  todo: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todo, setTodos] = useState<string[]>([]);

  return (
    <TodoContext.Provider value={{ todo, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
