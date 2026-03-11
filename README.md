# Simple DatePicker Calendar for React

<p align="left" width="100%"><a href="https://www.npmjs.com/package/react-simple-datepicker-calendar"><img width="1000" alt="react-simple-datepicker-calendar" src="https://github.com/ella-yschoi/react-simple-datepicker-calendar/assets/123397411/3ab691ed-36c1-4837-a368-fab725a94196"></a>

<br/>
<br/>

## Overview

Simple Datepicker is a date picker component for React. Select dates easily and customize the color scheme to fit your design needs. It will continually evolving to offer a variety of designs.

<br/>

## Features

### **Core Functionality**

- ☝️ **Date Selection** - Click to select any date with visual feedback
- 🔢 **Manual Input** - Type dates directly in YYYY/MM/DD format
- 👀 **Month Navigation** - Browse previous and next months seamlessly
- 🚚 **Quick Navigation** - Jump to today's date with one click
- ☀️ **Today Highlighting** - Clear visual distinction for current date

### **Accessibility & Usability**

- ♿ **WCAG 2.1 AA Compliant** - Full accessibility support for all users
- ⌨️ **Complete Keyboard Navigation** - Navigate using Tab, Arrow keys, Enter, and Space
- 🎨 **High Contrast Support** - Optimized colors for visual accessibility
- 📱 **Mobile Responsive** - Touch gestures and adaptive layouts
- 🗣️ **Screen Reader Ready** - ARIA attributes and semantic HTML structure

### **Customization & Internationalization**

- 🎨 **Flexible Styling** - Customize colors for every calendar element
- 🌍 **Multi-language Support** - English and Korean with easy extension
- 📅 **Smart Date Formatting** - Automatic date validation and formatting
- 🔧 **Optional Props** - Works out-of-the-box with sensible defaults

<br/>

## Installation

To install the Simple DatePicker Calendar in your React project, use the following command:

```shell
npm install react-simple-datepicker-calendar
```

<a href="https://www.npmjs.com/package/react-simple-datepicker-calendar"><img src="https://img.shields.io/npm/v/react-simple-datepicker-calendar.svg?style=flat-square" alt="npm version"/></a> <img src="https://img.shields.io/bundlephobia/minzip/react-simple-datepicker-calendar" alt="Min gzipped size"/> <img src="https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-green" alt="WCAG 2.1 AA Compliant"/>

<br/>

## Usage

```jsx
import { useState } from 'react';
import { Calendar } from 'react-simple-datepicker-calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
  };

  return (
    <Calendar
      calendarBackgroundColor='#252525'
      displayBackgroundColor='#252525'
      displayFontColor='#c5c5c5'
      dayFontColor='#899797'
      currentDateFontColor='#d5d5d5'
      prevNextDateFontColor='#899797'
      language='en'
      value={selectedDate}
      onChange={handleDateChange}
    />
  );
}

export default App;
```

You can also import the `useCalendar` hook and `CalendarProps` type for advanced usage:

```tsx
import { useCalendar } from 'react-simple-datepicker-calendar';
import type { CalendarProps } from 'react-simple-datepicker-calendar';
```

<br/>

## Props

| Prop Name               | Type                    | Description                                                                       | Default   |
| ----------------------- | ----------------------- | --------------------------------------------------------------------------------- | --------- |
| calendarBackgroundColor | string                  | Background color of the entire calendar component.                                | '#252525' |
| displayBackgroundColor  | string                  | Background color for the display area (e.g., month and year display).             | '#252525' |
| displayFontColor        | string                  | Font color for the display area, such as the selected date and year-month header. | '#c5c5c5' |
| dayFontColor            | string                  | Font color for the day names (e.g., Sun, Mon) in the calendar.                    | '#899797' |
| currentDateFontColor    | string                  | Font color for the current date in the calendar.                                  | '#d5d5d5' |
| prevNextDateFontColor   | string                  | Font color for the dates of the previous and next month.                          | '#899797' |
| language                | 'en'\|'ko'              | Supported values are 'en' for English and 'ko' for Korean.                        | 'en'      |
| value                   | Date                    | The currently selected date.                                                      |           |
| onChange                | (newDate: Date) => void | Function to call when the date is changed.                                        |           |
| className               | string                  | Custom CSS class name for the calendar root element.                              |           |
| style                   | React.CSSProperties     | Inline styles for the calendar root element.                                      |           |
| onMonthChange           | (date: Date) => void    | Callback fired when the displayed month changes.                                  |           |

<br/>

## Version History

### **v0.2.1** (Latest)

- 🔧 **Chore**
  - Normalize repository URL in package.json

### **v0.2.0**

- ✨ **New Features**
  - `className`, `style`, and `onMonthChange` props
  - Export `useCalendar` hook and `CalendarProps` type
  - Error message for invalid date input
- 🔧 **Bug Fixes**
  - Fix `onChange` not firing on keyboard date input
  - Fix date selection boundary comparison across months
  - Fix consumer state override in App export
  - Align display and calendar container widths
  - Prevent year-month display from wrapping to two lines
  - Use min-height so error message does not shrink bottom padding
- 🏗️ **Improvements**
  - Remove global styles from library output

### **v0.1.11**

- ✨ **Major Accessibility Improvements**
  - WCAG 2.1 AA compliance
  - Complete keyboard navigation support
  - Screen reader compatibility
  - High contrast mode support
  - Touch gesture support for mobile devices
- 🧪 **Accessibility Testing Tools**
  - Automated accessibility test runner
  - Color contrast validation
  - Keyboard navigation testing
- 📚 **Documentation**
  - Comprehensive accessibility guide
  - Testing instructions and checklists

### **v0.1.10**

- 🔧 **Bug Fixes**
  - Fixed import errors with optional props
  - Improved type safety for language prop
  - Enhanced component reliability

### **v0.1.7**

- 🔧 **Bug Fixes**
  - Fixed import errors with optional props
  - Improved type safety for language prop
  - Enhanced component reliability

### **v0.1.5**

- 🏗️ **Architecture Improvements**
  - Custom hooks for state management
  - Better separation of concerns
  - Enhanced component structure

### **v0.1.4**

- 🌍 **Internationalization**
  - Added Korean language support
  - Localized date formatting
  - Dynamic weekday names

<br/>

## Planned Updates

**Enhanced Customization**: Further customization options are in development. You'll soon be able to tailor the calendar to your preferences, including date format, start day, and more.

<br/>

## License

Simple DatePicker Calendar is open-source, licensed under the MIT License.

<br/>

## Contact

For inquiries or suggestions, feel free to submit [Github Issue](https://github.com/ella-yschoi/react-simple-datepicker-calendar/issues). Your feedback is invaluable. Thank you for using Simple DatePicker!
