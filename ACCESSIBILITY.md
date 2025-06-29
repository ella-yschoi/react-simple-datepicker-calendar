# Calendar Accessibility Guide

## WCAG 2.1 AA 준수 상태

이 캘린더 컴포넌트는 WCAG 2.1 AA 가이드라인을 준수하도록 설계되었습니다.

## 🎯 접근성 기능

### 1. 키보드 네비게이션

#### 날짜 선택

- **Tab**: 포커스 가능한 요소 간 이동
- **화살표 키**: 날짜 간 이동
  - `←` `→`: 좌우 이동
  - `↑` `↓`: 상하 이동 (7일 단위)
- **Home/End**: 첫 번째/마지막 날짜로 이동
- **Enter/Space**: 날짜 선택

#### 월 네비게이션

- **Tab**: 버튼 간 이동
- **Enter/Space**: 이전/다음 월 이동
- **Enter/Space**: 오늘 날짜로 이동

### 2. 스크린 리더 지원

#### ARIA 속성

- `role="application"`: 캘린더 컨테이너
- `role="grid"`: 날짜 그리드
- `role="button"`: 날짜 및 네비게이션 버튼
- `role="heading"`: 월/년 표시
- `role="status"`: 선택된 날짜 표시

#### 라이브 리전

- `aria-live="polite"`: 날짜 선택 시 자동 알림
- `aria-atomic="true"`: 전체 메시지 읽기

#### 상태 표시

- `aria-selected="true"`: 선택된 날짜
- `aria-current="date"`: 오늘 날짜
- `aria-disabled="true"`: 비활성화된 날짜

### 3. 시각적 접근성

#### 포커스 표시

- 명확한 포커스 아웃라인 (2px solid #2383e2)
- 포커스 오프셋으로 가시성 향상

#### 고대비 모드 지원

```css
@media (prefers-contrast: high) {
  /* 고대비 모드에서 강화된 테두리와 배경 */
}
```

#### 모션 감소 지원

```css
@media (prefers-reduced-motion: reduce) {
  /* 애니메이션 비활성화 */
}
```

### 4. 터치 접근성

#### 터치 타겟 크기

- 모바일에서 최소 44px × 44px
- 충분한 터치 영역 보장

## 🔧 사용법

### 기본 사용법

```tsx
import { Calendar } from 'react-simple-datepicker-calendar';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Calendar
      value={selectedDate}
      onChange={setSelectedDate}
      // 접근성 속성은 자동으로 적용됩니다
    />
  );
}
```

### 접근성 훅 사용

```tsx
import { useAccessibility } from './hooks/useAccessibility';

function CalendarComponent() {
  const { calendarRef, announce, validateAccessibility } = useAccessibility({
    onDateSelect: (date) => {
      console.log('Date selected:', date);
      announce(`날짜가 선택되었습니다: ${date.toLocaleDateString()}`);
    },
  });

  return <div ref={calendarRef}>{/* 캘린더 컴포넌트 */}</div>;
}
```

### 접근성 테스트

```tsx
import { testCalendarAccessibility } from './utils/accessibilityTest';

// 컴포넌트 마운트 후 테스트 실행
useEffect(() => {
  const calendarElement = document.querySelector('[role="application"]');
  if (calendarElement) {
    const result = testCalendarAccessibility(calendarElement as HTMLElement);
    console.log('Accessibility test result:', result);
  }
}, []);
```

## 🧪 접근성 테스트

### 자동화된 테스트

```bash
# 접근성 테스트 실행
npm run test:accessibility

# 색상 대비 테스트
npm run test:contrast

# 키보드 네비게이션 테스트
npm run test:keyboard
```

### 수동 테스트 체크리스트

#### 키보드 네비게이션

- [ ] Tab으로 모든 인터랙티브 요소에 접근 가능
- [ ] 화살표 키로 날짜 간 이동 가능
- [ ] Enter/Space로 날짜 선택 가능
- [ ] 포커스 표시가 명확함

#### 스크린 리더

- [ ] 모든 버튼에 적절한 aria-label
- [ ] 날짜 선택 시 알림 메시지
- [ ] 현재 선택된 날짜 상태 표시
- [ ] 오늘 날짜 식별 가능

#### 시각적 접근성

- [ ] 고대비 모드에서 가독성 확보
- [ ] 색상만으로 정보 전달하지 않음
- [ ] 충분한 색상 대비 (4.5:1 이상)

#### 모바일 접근성

- [ ] 터치 타겟 크기 적절 (44px 이상)
- [ ] 터치 제스처 지원
- [ ] 반응형 디자인

## 🚨 알려진 이슈

### 해결된 이슈

- ✅ 날짜 버튼에 aria-label 추가
- ✅ 키보드 네비게이션 구현
- ✅ 스크린 리더 알림 시스템
- ✅ 포커스 관리 개선

### 개선 예정

- 🔄 음성 제어 지원
- 🔄 하단 쿼드 지원
- 🔄 고급 키보드 단축키

## 📚 추가 리소스

### WCAG 2.1 가이드라인

- [WCAG 2.1 AA 요구사항](https://www.w3.org/WAI/WCAG21/AA/)
- [키보드 접근성](https://www.w3.org/WAI/WCAG21/quickref/#keyboard)
- [스크린 리더 지원](https://www.w3.org/WAI/WCAG21/quickref/#name-role-value)

### 테스트 도구

- [axe-core](https://github.com/dequelabs/axe-core)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 개발 가이드

- [ARIA 사용 가이드](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
- [접근성 테스트 방법](https://www.w3.org/WAI/ER/tools/)

## 🤝 기여하기

접근성 개선에 기여하고 싶으시다면:

1. 이슈 리포트 작성
2. 접근성 테스트 실행
3. 개선 사항 제안
4. 코드 리뷰 참여

모든 기여는 WCAG 2.1 AA 준수를 목표로 합니다.

---

**참고**: 이 문서는 지속적으로 업데이트됩니다. 최신 정보는 프로젝트 저장소를 확인해주세요.
