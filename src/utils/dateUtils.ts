// 특정 월의 모든 날짜를 배열로 반환한다.
// Used for displaying all the days in a month, hence required when rendering the calendar for that month.
const getMonthDays = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const days: Date[] = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return days;
}

// 특정 월의 첫 번째 날짜의 요일을 반환한다.
// Determine the starting position of a week when rendering the calendar.
const getMonthFirstDay = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
}

// 주어진 날짜에 월을 더하거나 뺀다.
// Used when the user navigates to previous/next months in the calendar.
const addMonths = (date: Date, months: number): Date => {
  const result = new Date(date);
  result.setMonth(result.getMonth() + months);
  return result;
}

// 주어진 날짜에 일수를 더하거나 뺀다.
// Used for specific date calculations or setting date ranges.
const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// 두 날짜가 같은 날인지 비교한다.
// Compare the selected date with a specific date for highlighting.
const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
}

// 두 날짜가 같은 월인지 비교한다.
// Check if the current month being viewed and a specific date are in the same month.
const isSameMonth = (date1: Date, date2: Date): boolean => {
  return date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();
}

// 사용자가 날짜를 입력할 때 표준 형식(YYYY-MM-DD)으로 변환하는 데 사용한다.
// Convert a specific date to a formatted string when the user enters a date.
const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
}

// 사용자가 입력한 문자열 형태를 Date 객체로 변환할 때 사용한다.
// Converts a user-entered string format to a Date object.
const parseDate = (dateString: string): Date => {
  return new Date(dateString);
}

// 사용자가 입력한 문자열이 유효한 날짜인지 검사한다.
// Checks if the user-entered string is a valid date.
const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
}

// 이전 달로 이동한다.
// Moves to the previous month.
const getPreviousMonth = (date: Date): Date => {
  return addMonths(date, -1);
}

// 다음 달로 이동한다.
// Moves to the next month.
const getNextMonth = (date: Date): Date => {
  return addMonths(date, 1);
}

export { getMonthDays, getMonthFirstDay, addMonths, addDays, isSameDay, isSameMonth, formatDate, parseDate, isValidDate, getPreviousMonth, getNextMonth };
