import { createContext, useContext, ReactNode } from 'react';
import useCalendar, { CalendarState } from '../hooks/useCalendar';

interface CalendarProviderProps {
  children: ReactNode;
  value: Date;
}

const CalendarContext = createContext<CalendarState | null>(null);

const CalendarProvider = ({ children, value }: CalendarProviderProps) => {
  const calendar = useCalendar(value);

  return (
    <CalendarContext.Provider value={calendar}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendarContext = (): CalendarState => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendarContext must be used within a CalendarProvider');
  }
  
  return context;
};

export { CalendarProvider, useCalendarContext };
