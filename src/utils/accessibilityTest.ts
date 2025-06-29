// Accessibility testing utilities for WCAG 2.1 AA compliance

export interface AccessibilityTestResult {
  passed: boolean;
  issues: string[];
  warnings: string[];
  recommendations: string[];
}

export interface ColorContrastResult {
  ratio: number;
  passes: boolean;
  level: 'AA' | 'AAA' | 'FAIL';
}

// Color contrast calculation (simplified)
export const calculateColorContrast = (
  foreground: string,
  background: string
): ColorContrastResult => {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const fg = hexToRgb(foreground);
  const bg = hexToRgb(background);

  if (!fg || !bg) {
    return { ratio: 0, passes: false, level: 'FAIL' };
  }

  // Calculate relative luminance
  const getLuminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r, g, b].map((c) => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };

  const l1 = getLuminance(fg.r, fg.g, fg.b);
  const l2 = getLuminance(bg.r, bg.g, bg.b);

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

  return {
    ratio,
    passes: ratio >= 4.5, // AA standard for normal text
    level: ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : 'FAIL',
  };
};

// Test for required ARIA attributes
export const testAriaAttributes = (element: HTMLElement): string[] => {
  const issues: string[] = [];

  // Check for interactive elements
  const interactiveElements = element.querySelectorAll(
    'button, [role="button"], [tabindex]'
  );
  interactiveElements.forEach((el) => {
    const htmlEl = el as HTMLElement;

    if (
      htmlEl.getAttribute('role') === 'button' &&
      !htmlEl.getAttribute('aria-label')
    ) {
      issues.push(`Button element missing aria-label: ${htmlEl.outerHTML}`);
    }

    if (htmlEl.tabIndex >= 0 && !htmlEl.getAttribute('aria-label')) {
      issues.push(`Focusable element missing aria-label: ${htmlEl.outerHTML}`);
    }
  });

  // Check for form controls
  const formControls = element.querySelectorAll('input, select, textarea');
  formControls.forEach((control) => {
    const htmlControl = control as HTMLElement;
    if (
      !htmlControl.getAttribute('aria-label') &&
      !htmlControl.getAttribute('aria-labelledby')
    ) {
      issues.push(`Form control missing label: ${htmlControl.outerHTML}`);
    }
  });

  return issues;
};

// Test for keyboard navigation
export const testKeyboardNavigation = (element: HTMLElement): string[] => {
  const issues: string[] = [];

  // Check if all interactive elements are keyboard accessible
  const interactiveElements = element.querySelectorAll(
    'button, [role="button"], [tabindex]:not([tabindex="-1"])'
  );

  if (interactiveElements.length === 0) {
    issues.push('No keyboard accessible elements found');
  }

  // Check for focus indicators
  const style = window.getComputedStyle(element);
  const hasFocusStyles =
    style.outline !== 'none' || style.borderColor !== 'transparent';

  if (!hasFocusStyles) {
    issues.push('No visible focus indicators found');
  }

  return issues;
};

// Test for screen reader compatibility
export const testScreenReaderCompatibility = (
  element: HTMLElement
): string[] => {
  const issues: string[] = [];

  // Check for proper heading structure
  const headings = element.querySelectorAll(
    'h1, h2, h3, h4, h5, h6, [role="heading"]'
  );
  if (headings.length === 0) {
    issues.push('No headings found for screen reader navigation');
  }

  // Check for landmarks
  const landmarks = element.querySelectorAll(
    'nav, main, header, footer, aside, [role="main"], [role="navigation"], [role="banner"], [role="contentinfo"], [role="complementary"]'
  );
  if (landmarks.length === 0) {
    issues.push('No landmark elements found');
  }

  // Check for live regions
  const liveRegions = element.querySelectorAll('[aria-live]');
  if (liveRegions.length === 0) {
    issues.push('No live regions found for dynamic content announcements');
  }

  return issues;
};

// Test for color contrast
export const testColorContrast = (element: HTMLElement): string[] => {
  const issues: string[] = [];

  // Get all text elements
  const textElements = element.querySelectorAll('*');
  textElements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const style = window.getComputedStyle(htmlEl);
    const color = style.color;
    const backgroundColor = style.backgroundColor;

    if (
      color &&
      backgroundColor &&
      color !== 'transparent' &&
      backgroundColor !== 'transparent'
    ) {
      const contrast = calculateColorContrast(color, backgroundColor);
      if (!contrast.passes) {
        issues.push(
          `Insufficient color contrast (${contrast.ratio.toFixed(
            2
          )}:1) for element: ${htmlEl.outerHTML}`
        );
      }
    }
  });

  return issues;
};

// Main accessibility test function
export const runAccessibilityTests = (
  element: HTMLElement
): AccessibilityTestResult => {
  const issues: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Run all tests
  const ariaIssues = testAriaAttributes(element);
  const keyboardIssues = testKeyboardNavigation(element);
  const screenReaderIssues = testScreenReaderCompatibility(element);
  const contrastIssues = testColorContrast(element);

  issues.push(
    ...ariaIssues,
    ...keyboardIssues,
    ...screenReaderIssues,
    ...contrastIssues
  );

  // Generate recommendations
  if (ariaIssues.length > 0) {
    recommendations.push(
      'Add appropriate ARIA labels and roles to interactive elements'
    );
  }

  if (keyboardIssues.length > 0) {
    recommendations.push(
      'Ensure all interactive elements are keyboard accessible with visible focus indicators'
    );
  }

  if (screenReaderIssues.length > 0) {
    recommendations.push(
      'Add proper heading structure and landmarks for screen reader navigation'
    );
  }

  if (contrastIssues.length > 0) {
    recommendations.push(
      'Improve color contrast to meet WCAG 2.1 AA standards (4.5:1 for normal text)'
    );
  }

  // Check for common accessibility patterns
  const hasSkipLink = element.querySelector('a[href^="#"]');
  if (!hasSkipLink) {
    warnings.push('Consider adding a skip link for keyboard users');
  }

  const hasErrorHandling = element.querySelector(
    '[role="alert"], [aria-invalid]'
  );
  if (!hasErrorHandling) {
    warnings.push(
      'Consider adding error handling with appropriate ARIA attributes'
    );
  }

  return {
    passed: issues.length === 0,
    issues,
    warnings,
    recommendations,
  };
};

// Test specific calendar functionality
export const testCalendarAccessibility = (
  element: HTMLElement
): AccessibilityTestResult => {
  const issues: string[] = [];
  const warnings: string[] = [];
  const recommendations: string[] = [];

  // Calendar-specific tests
  const dateButtons = element.querySelectorAll('[role="button"]');
  if (dateButtons.length === 0) {
    issues.push('No date selection buttons found');
  }

  const navigationButtons = element.querySelectorAll(
    'button[aria-label*="month"]'
  );
  if (navigationButtons.length < 2) {
    issues.push('Month navigation buttons not found or improperly labeled');
  }

  const todayButton = element.querySelector('button[aria-label*="today"]');
  if (!todayButton) {
    warnings.push('Today button not found or improperly labeled');
  }

  const selectedDate = element.querySelector('[aria-selected="true"]');
  if (!selectedDate) {
    warnings.push('No selected date indicator found');
  }

  const todayIndicator = element.querySelector('[aria-current="date"]');
  if (!todayIndicator) {
    warnings.push('Today indicator not found');
  }

  // Check for proper grid structure
  const grid = element.querySelector('[role="grid"]');
  if (!grid) {
    issues.push('Calendar grid missing proper role attribute');
  }

  if (grid) {
    const hasRowCount = grid.getAttribute('aria-rowcount');
    const hasColCount = grid.getAttribute('aria-colcount');

    if (!hasRowCount || !hasColCount) {
      issues.push('Calendar grid missing row/column count attributes');
    }
  }

  return {
    passed: issues.length === 0,
    issues,
    warnings,
    recommendations,
  };
};
