import { useState, useCallback, useRef, useEffect } from 'react';

interface UseAccessibilityProps {
  onDateSelect?: (date: Date) => void;
}

interface AccessibilityState {
  focusedDate: Date | null;
  announcement: string;
  isNavigating: boolean;
}

export const useAccessibility = ({ onDateSelect }: UseAccessibilityProps) => {
  const [state, setState] = useState<AccessibilityState>({
    focusedDate: null,
    announcement: '',
    isNavigating: false,
  });

  const calendarRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  // Update focusable elements when component mounts or updates
  useEffect(() => {
    if (calendarRef.current) {
      const focusableElements = Array.from(
        calendarRef.current.querySelectorAll(
          'button, [tabindex]:not([tabindex="-1"]), [role="button"]'
        )
      ) as HTMLElement[];
      focusableElementsRef.current = focusableElements;
    }
  }, []);

  // Focus management
  const focusDate = useCallback((date: Date) => {
    setState((prev) => ({ ...prev, focusedDate: date }));

    // Find and focus the corresponding date element
    if (calendarRef.current) {
      const dateElements =
        calendarRef.current.querySelectorAll('[role="button"]');
      dateElements.forEach((element) => {
        const ariaLabel = element.getAttribute('aria-label');
        if (ariaLabel && ariaLabel.includes(date.toDateString())) {
          (element as HTMLElement).focus();
        }
      });
    }
  }, []);

  // Screen reader announcements
  const announce = useCallback((message: string) => {
    setState((prev) => ({ ...prev, announcement: message }));

    // Clear announcement after a delay
    setTimeout(() => {
      setState((prev) => ({ ...prev, announcement: '' }));
    }, 3000);
  }, []);

  // Keyboard navigation
  const handleKeyboardNavigation = useCallback(
    (event: KeyboardEvent) => {
      const { key, target } = event;
      const currentElement = target as HTMLElement;

      if (!currentElement || !focusableElementsRef.current.length) return;

      const currentIndex = focusableElementsRef.current.indexOf(currentElement);
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      switch (key) {
        case 'ArrowLeft':
          event.preventDefault();
          nextIndex =
            currentIndex > 0
              ? currentIndex - 1
              : focusableElementsRef.current.length - 1;
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextIndex =
            currentIndex < focusableElementsRef.current.length - 1
              ? currentIndex + 1
              : 0;
          break;
        case 'ArrowUp':
          event.preventDefault();
          nextIndex = currentIndex >= 7 ? currentIndex - 7 : currentIndex;
          break;
        case 'ArrowDown':
          event.preventDefault();
          nextIndex =
            currentIndex + 7 < focusableElementsRef.current.length
              ? currentIndex + 7
              : currentIndex;
          break;
        case 'Home':
          event.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          event.preventDefault();
          nextIndex = focusableElementsRef.current.length - 1;
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (onDateSelect && state.focusedDate) {
            onDateSelect(state.focusedDate);
            announce(
              `Date selected: ${state.focusedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}`
            );
          }
          return;
      }

      if (nextIndex !== currentIndex) {
        focusableElementsRef.current[nextIndex]?.focus();
        setState((prev) => ({ ...prev, isNavigating: true }));

        // Reset navigation flag after a short delay
        setTimeout(() => {
          setState((prev) => ({ ...prev, isNavigating: false }));
        }, 100);
      }
    },
    [onDateSelect, state.focusedDate, announce]
  );

  // Focus trap for modal-like behavior
  const handleFocusTrap = useCallback((event: KeyboardEvent) => {
    if (event.key !== 'Tab' || !focusableElementsRef.current.length) return;

    const firstElement = focusableElementsRef.current[0];
    const lastElement =
      focusableElementsRef.current[focusableElementsRef.current.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }, []);

  // Set up keyboard event listeners
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      handleKeyboardNavigation(event);
      handleFocusTrap(event);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyboardNavigation, handleFocusTrap]);

  // Accessibility validation
  const validateAccessibility = useCallback(() => {
    const issues: string[] = [];

    if (!calendarRef.current) {
      issues.push('Calendar container not found');
      return issues;
    }

    // Check for required ARIA attributes
    const calendar = calendarRef.current;
    if (!calendar.getAttribute('role')) {
      issues.push('Calendar container missing role attribute');
    }
    if (!calendar.getAttribute('aria-label')) {
      issues.push('Calendar container missing aria-label');
    }

    // Check for focusable elements
    const focusableElements = calendar.querySelectorAll(
      'button, [tabindex]:not([tabindex="-1"]), [role="button"]'
    );
    if (focusableElements.length === 0) {
      issues.push('No focusable elements found in calendar');
    }

    // Check for proper heading structure
    const headings = calendar.querySelectorAll(
      'h1, h2, h3, h4, h5, h6, [role="heading"]'
    );
    if (headings.length === 0) {
      issues.push('No headings found for screen reader navigation');
    }

    return issues;
  }, []);

  return {
    calendarRef,
    state,
    focusDate,
    announce,
    validateAccessibility,
    focusableElementsRef,
  };
};
