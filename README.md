# Simple DatePicker Calendar for React

<p align="left" width="100%"><a href="https://www.npmjs.com/package/react-simple-datepicker-calendar"><img width="1000" alt="react-simple-datepicker-calendar" src="https://github.com/ella-yschoi/react-simple-datepicker-calendar/assets/123397411/3ab691ed-36c1-4837-a368-fab725a94196"></a>

<br/>
<br/>

## Overview

Simple Datepicker is a date picker component for React. Select dates easily and customize the color scheme to fit your design needs. It will continually evolving to offer a variety of designs.

<br/>

## Features

- ☝️ Select any date.
- 🔢 Input a date manually.
- 👀 Browse previous or future months in current month.
- 🚚 Navigate quickly to a specific date.
- ☀️ Distinguish today's date from the selected date.

<br/>

## Installation

To install the Simple DatePicker Calendar in your React project, use the following command:

```shell
npm install react-simple-datepicker-calendar
```

<a href="https://www.npmjs.com/package/react-simple-datepicker-calendar"><img src="https://img.shields.io/npm/v/react-simple-datepicker-calendar.svg?style=flat-square" alt="npm version"/></a> <img src="https://img.shields.io/bundlephobia/minzip/react-simple-datepicker-calendar" alt="Min gzipped size"/>

<br/>

## Usage

```jsx
import React, { useState } from 'react';
import { Calendar } from 'react-simple-datepicker-calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <Calendar
      calendarBackgroundColor="#252525"
      displayBackgroundColor="#252525"
      displayFontColor="#c5c5c5"
      dayFontColor="#899797"
      currentDateFontColor="#d5d5d5"
      prevNextDateFontColor="#899797"
      language="en"
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
}
```

<br/>

## Props

| Prop Name                | Type                     | Description                                                                       | Default      |
| ------------------------ | ------------------------ | --------------------------------------------------------------------------------- | ------------ |
| calendarBackgroundColor  | string                   | Background color of the entire calendar component.                                | '#252525'    |
| displayBackgroundColor   | string                   | Background color for the display area (e.g., month and year display).             | '#252525'    |
| displayFontColor         | string                   | Font color for the display area, such as the selected date and year-month header. | '#c5c5c5'    |
| dayFontColor             | string                   | Font color for the day names (e.g., Sun, Mon) in the calendar.                    | '#899797'    |
| currentDateFontColor     | string                   | Font color for the current date in the calendar.                                  | '#d5d5d5'    |
| prevNextDateFontColor    | string                   | Font color for the dates of the previous and next month.                          | '#899797'    |
| language                 | 'en'\|'ko'               | Supported values are 'en' for English and 'ko' for Korean.                        |     'en'     |
| value                    | Date                     | The currently selected date.                                                      |              |
| onChange                 | (newDate: Date) => void  | Function to call when the date is changed.                                        |              |

<br/>

## Planned Updates

**Enhance Customization**: Further customization options are in development. You'll soon be able to tailor the calendar to your preferences, including date format, start day, and more.

<br/>

## License

Simple DatePicker Calendar is open-source, licensed under the MIT License.

<br/>

## Contact

For inquiries or suggestions, feel free to submit [Github Issue](https://github.com/ella-yschoi/react-simple-datepicker-calendar/issues). Your feedback is invaluable. Thank you for using Simple DatePicker!
