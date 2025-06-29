import styled from 'styled-components';

type DateProps = {
  $dayFontColor?: string;
  $currentDateFontColor?: string;
  $prevNextDateFontColor?: string;
};

const StyledDayUnit = styled.div<DateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px;
  width: 15px;
  height: 10px;
  font-size: 12px;
  color: ${(props) => props.$dayFontColor || '#899797'};
`;

const StyledCurrentDateUnit = styled.div<DateProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 15px;
  height: 15px;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.$currentDateFontColor || '#d5d5d5'};
  border: 1px solid transparent;
  transition: all 0.2s ease;

  /* Focus styles for keyboard navigation */
  &:focus {
    outline: 2px solid #2383e2;
    outline-offset: 2px;
    border-radius: 4px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #2383e2;
    border-radius: 20%;
  }

  &.today {
    color: #eff5fd;
    background-color: #eb5756;
    border-radius: 50%;
    font-weight: 600;
  }

  &.selected {
    color: #eff5fd;
    background-color: #2383e2;
    border-radius: 20%;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 2px solid currentColor;

    &:hover {
      border-color: #2383e2;
      background-color: rgba(35, 131, 226, 0.1);
    }

    &.today {
      border-color: #eb5756;
      background-color: #eb5756;
    }

    &.selected {
      border-color: #2383e2;
      background-color: #2383e2;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  /* Disabled state */
  &[aria-disabled='true'] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* Screen reader only content */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const StyledPrevNextDateUnit = styled(StyledCurrentDateUnit)<DateProps>`
  color: ${(props) =>
    props.$prevNextDateFontColor || props.$currentDateFontColor || '#899797'};
`;

export { StyledDayUnit, StyledCurrentDateUnit, StyledPrevNextDateUnit };
