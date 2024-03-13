# Simple DatePicker Calendar for React

<p align="left" width="100%"><a href="https://www.npmjs.com/package/react-simple-datepicker-calendar"><img width="1000" alt="react-simple-datepicker-calendar" src="https://github.com/ella-yschoi/react-simple-datepicker-calendar/assets/123397411/22d674d8-8ff5-41b5-b8fd-ae17ae063817"></a>

<br/>
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
import React from 'react';
import { Calendar } from 'react-simple-datepicker-calendar';

function App() {
  return (
    <Calendar
      calendarBackgroundColor="#252525"
      displayBackgroundColor="#252525"
      displayFontColor="#c5c5c5"
      dayFontColor="#899797"
      dateFontColor="#d5d5d5"
      extraDateFontColor="#899797"
    />
  );
}
```

<br/>

## Props

| Prop Name                | Type               | Description                                                                       | Default      |
| ------------------------ | ------------------ | --------------------------------------------------------------------------------- | ------------ |
| calendarBackgroundColor  | string             | Background color of the entire calendar component.                                | '#252525'    |
| displayBackgroundColor   | string             | Background color for the display area (e.g., month and year display).             | '#252525'    |
| displayFontColor         | string             | Font color for the display area, such as the selected date and year-month header. | '#c5c5c5'    |
| dayFontColor             | string             | Font color for the day names (e.g., Sun, Mon) in the calendar.                    | '#899797'    |
| currentDateFontColor     | string             | Font color for the current date in the calendar.                                  | '#d5d5d5'    |
| prevNextDateFontColor    | string             | Font color for the dates of the previous and next month.                          | '#899797'    |

<br/>

## Planned Updates

**Enhance Customization**: Further customization options are in development. You'll soon be able to tailor the calendar to your preferences, including date format, language, start day, and more.

<br/>

## License

Simple DatePicker Calendar is open-source, licensed under the MIT License.

<br/>

## Contact

For inquiries or suggestions, feel free to submit [Github Issue](https://github.com/ella-yschoi/react-simple-datepicker-calendar/issues). Your feedback is invaluable. Thank you for using Simple DatePicker!
