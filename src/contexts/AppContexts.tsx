// contexts/AppContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Определяем интерфейс для состояния
interface AppState {
  city: {id: number, flag: string, name: string, status: boolean} | null; // Пример состояния
}

// Определяем тип контекста
interface AppContextType {
  state: AppState;
  setCity: (city: {id: number, flag: string, name: string, status: boolean}) => void;
}

// Создаем контекст с начальным значением null
const AppContext = createContext<AppContextType | undefined>(undefined);

// Провайдер контекста
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Определяем начальное состояние
  const [state, setState] = useState<AppState>({ city: null });

  // Функция для обновления города
  const setCity = (city: {id: number, flag: string, name: string, status: boolean}) => {
    setState((prevState) => ({ ...prevState, city }));
  };

  return (
    <AppContext.Provider value={{ state, setCity }}>
      {children}
    </AppContext.Provider>
  );
};

// Хук для использования контекста
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }

  return context;
};
