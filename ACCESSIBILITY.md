# Calendar Accessibility Guide

## WCAG 2.1 AA Compliance Status

This calendar component is designed to comply with WCAG 2.1 AA guidelines.

## 🎯 Accessibility Features

### 1. Keyboard Navigation

#### Date Selection

- **Tab**: Navigate between focusable elements
- **Arrow Keys**: Navigate between dates
  - `←` `→`: Left/right movement
  - `↑` `↓`: Up/down movement (7-day intervals)
- **Home/End**: Move to first/last date
- **Enter/Space**: Select date

#### Month Navigation

- **Tab**: Navigate between buttons
- **Enter/Space**: Navigate to previous/next month
- **Enter/Space**: Navigate to today's date

### 2. Screen Reader Support

#### ARIA Attributes

- `role="application"`: Calendar container
- `role="grid"`: Date grid
- `role="button"`: Date and navigation buttons
- `role="heading"`: Month/year display
- `role="status"`: Selected date display

#### Live Regions

- `aria-live="polite"`: Automatic announcement when date is selected
- `aria-atomic="true"`: Read entire message

#### Status Indicators

- `aria-selected="true"`: Selected date
- `aria-current="date"`: Today's date
- `aria-disabled="true"`: Disabled date

### 3. Visual Accessibility

#### Focus Indicators

- Clear focus outline (2px solid #2383e2)
- Enhanced visibility with focus offset

#### High Contrast Mode Support

```css
@media (prefers-contrast: high) {
  /* Enhanced borders and backgrounds in high contrast mode */
}
```

#### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable animations */
}
```

### 4. Touch Accessibility

#### Touch Target Size

- Minimum 44px × 44px on mobile
- Ensures sufficient touch area

## 🔧 Usage

### Basic Usage

```tsx
import { Calendar } from 'react-simple-datepicker-calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      // Accessibility attributes are automatically applied
    />
  );
}
```

### Using Accessibility Hook

```tsx
import { useAccessibility } from './hooks/useAccessibility';

function CalendarComponent() {
  const { calendarRef, announce, validateAccessibility } = useAccessibility({
    onDateSelect: (date) => {
      console.log('Date selected:', date);
      announce(`Date selected: ${date.toLocaleDateString()}`);
    },
  });

  return <div ref={calendarRef}>{/* Calendar component */}</div>;
}
```

### Accessibility Testing

```tsx
import { testCalendarAccessibility } from './utils/accessibilityTest';

// Run test after component mounts
useEffect(() => {
  const calendarElement = document.querySelector('[role="application"]');
  if (calendarElement) {
    const result = testCalendarAccessibility(calendarElement as HTMLElement);
    console.log('Accessibility test result:', result);
  }
}, []);
```

## 🧪 Accessibility Testing

### Automated Testing

```bash
# Run accessibility tests
npm run test:accessibility

# Color contrast tests
npm run test:contrast

# Keyboard navigation tests
npm run test:keyboard
```

### Manual Testing Checklist

#### Keyboard Navigation

- [ ] Can access all interactive elements with Tab
- [ ] Can navigate between dates with arrow keys
- [ ] Can select dates with Enter/Space
- [ ] Focus indicators are clear

#### Screen Reader

- [ ] All buttons have appropriate aria-label
- [ ] Announcement message when date is selected
- [ ] Current selected date status is displayed
- [ ] Today's date is identifiable

#### Visual Accessibility

- [ ] Readability ensured in high contrast mode
- [ ] Information is not conveyed by color alone
- [ ] Sufficient color contrast (4.5:1 or higher)

#### Mobile Accessibility

- [ ] Appropriate touch target size (44px or larger)
- [ ] Touch gesture support
- [ ] Responsive design

## 🚨 Known Issues

### Resolved Issues

- ✅ Added aria-label to date buttons
- ✅ Implemented keyboard navigation
- ✅ Screen reader announcement system
- ✅ Improved focus management

### Planned Improvements

- 🔄 Voice control support
- 🔄 Quadriplegia support
- 🔄 Advanced keyboard shortcuts

## 📚 Additional Resources

### WCAG 2.1 Guidelines

- [WCAG 2.1 AA Requirements](https://www.w3.org/WAI/WCAG21/AA/)
- [Keyboard Accessibility](https://www.w3.org/WAI/WCAG21/quickref/#keyboard)
- [Screen Reader Support](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value)

### Testing Tools

- [axe-core](https://github.com/dequelabs/axe-core)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### Development Guides

- [ARIA Usage Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [Accessibility Testing Methods](https://www.w3.org/WAI/ER/tools/)

## 🤝 Contributing

If you'd like to contribute to accessibility improvements:

1. Create an issue report
2. Run accessibility tests
3. Suggest improvements
4. Participate in code reviews

All contributions aim for WCAG 2.1 AA compliance.

---

**Note**: This document is continuously updated. Please check the project repository for the latest information.
