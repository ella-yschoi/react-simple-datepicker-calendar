import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalendarProps } from './types';

const calendarProps: CalendarProps = {
  calendarBackgroundColor: '#252525',
  displayBackgroundColor: '#252525',
  displayFontColor: '#c5c5c5',
  dayFontColor: '#899797',
  currentDateFontColor: '#d5d5d5',
  prevNextDateFontColor: '#899797',
  language: 'en',
  value: new Date(),
  onChange: () => {},
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App {...calendarProps} />
  </React.StrictMode>
);
