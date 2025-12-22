# 동국제강 안전환경통합전산시스템 디자인 시스템

## 개요
이 문서는 동국제강 안전환경통합전산시스템의 UI/UX 디자인 시스템을 정의합니다.

## 🎨 색상 팔레트

### Primary Colors (메인 브랜드 컬러)
- **Orange**: `#FF6B35` - 안전을 상징하는 주요 액센트 컬러
- **Orange Light**: `#F7931E` - 그라디언트 및 보조 컬러
- **Navy**: `#1a2332` - 전문성과 신뢰를 나타내는 메인 컬러
- **Navy Dark**: `#0f1419` - 사이드바 및 어두운 배경

### Semantic Colors (의미적 컬러)
- **Danger**: `#EF4444` - 위험, 오류
- **Success**: `#10B981` - 성공, 완료
- **Warning**: `#F59E0B` - 주의, 경고
- **Info**: `#3B82F6` - 정보, 안내

## 🔤 타이포그래피

### Heading Styles
```css
h1: 2rem (32px), font-weight: 700
h2: 1.5rem (24px), font-weight: 600
h3: 1.25rem (20px), font-weight: 600
```

### Body & Small Text
```css
body: 0.875rem (14px), line-height: 1.5
small: 0.75rem (12px), line-height: 1.5
```

## 📐 간격 (Spacing)

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
```

## 🔘 컴포넌트

### Button
재사용 가능한 버튼 컴포넌트입니다.

```tsx
import { Button } from './components/ui/Button';
import { Save } from 'lucide-react';

// Primary 버튼
<Button variant="primary">제출</Button>

// 아이콘 포함
<Button variant="primary" icon={Save}>저장</Button>

// Secondary 버튼
<Button variant="secondary">취소</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: Lucide 아이콘 컴포넌트
- `fullWidth`: 전체 너비 사용

### Input
라벨과 에러 메시지를 포함한 입력 필드입니다.

```tsx
import { Input } from './components/ui/Input';
import { User } from 'lucide-react';

<Input
  label="이름"
  placeholder="이름을 입력하세요"
  required
  icon={User}
/>
```

**Props:**
- `label`: 입력 필드 라벨
- `error`: 에러 메시지
- `icon`: Lucide 아이콘 컴포넌트
- `required`: 필수 입력 표시

### Select
드롭다운 선택 컴포넌트입니다.

```tsx
import { Select } from './components/ui/Select';

<Select
  label="사업장명"
  required
  options={[
    { value: '1', label: '포항제철소' },
    { value: '2', label: '당진제철소' }
  ]}
/>
```

### Textarea
멀티라인 텍스트 입력 컴포넌트입니다.

```tsx
import { Textarea } from './components/ui/Textarea';

<Textarea
  label="세부 작업내용"
  placeholder="작업 내용을 입력하세요"
  rows={5}
  required
/>
```

### Card
콘텐츠를 감싸는 카드 컴포넌트입니다.

```tsx
import { Card, CardSection, SectionHeader } from './components/ui/Card';

<Card>
  <CardSection>
    <SectionHeader title="기본정보" badge="필수" />
    {/* 콘텐츠 */}
  </CardSection>
</Card>
```

### FileUpload
파일 업로드 컴포넌트입니다.

```tsx
import { FileUpload } from './components/ui/FileUpload';

<FileUpload
  label="근로계획 서류"
  accept=".pdf,.doc,.docx"
  onFileSelect={(file) => console.log(file)}
/>
```

### Alert
알림 메시지 컴포넌트입니다.

```tsx
import { Alert } from './components/ui/Alert';

<Alert variant="info">
  모든 필수 항목을 입력해주세요.
</Alert>

<Alert variant="warning">
  작업 전 안전 교육을 이수하셔야 합니다.
</Alert>
```

**Variants:**
- `info`: 정보성 메시지
- `success`: 성공 메시지
- `warning`: 주의 메시지
- `danger`: 위험/오류 메시지

## 🎭 그라디언트

### Primary Gradient
```css
background: linear-gradient(to right, #FF6B35, #F7931E);
```
용도: 주요 버튼, 액센트 요소

### Sidebar Gradient
```css
background: linear-gradient(to bottom, #1a2332, #0f1419);
```
용도: 사이드바 배경

## 📱 반응형 디자인

### 브레이크포인트
```
sm: 640px   - 모바일
md: 768px   - 태블릿
lg: 1024px  - 데스크톱
xl: 1280px  - 대형 데스크톱
```

### 반응형 패턴
- **모바일 (< 1024px)**: 사이드바 숨김 (햄버거 메뉴), 1열 레이아웃
- **태블릿 (768px - 1023px)**: 2열 그리드, 관련문서 하단 배치
- **데스크톱 (>= 1024px)**: 3열 그리드, 사이드바 고정 표시

## 🔄 전환 효과 (Transitions)

```css
fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

## 📋 사용 예시

### 완전한 폼 예시

```tsx
import { Card, CardSection, SectionHeader } from './components/ui/Card';
import { Input } from './components/ui/Input';
import { Select } from './components/ui/Select';
import { Button } from './components/ui/Button';
import { Save, Send } from 'lucide-react';

function MyForm() {
  return (
    <Card>
      <CardSection className="bg-gradient-to-r from-gray-50 to-white">
        <SectionHeader title="기본정보" badge="필수" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <Select
            label="사업장명"
            required
            options={[
              { value: '1', label: '포항제철소' },
              { value: '2', label: '당진제철소' }
            ]}
          />
          
          <Input
            label="업체명"
            placeholder="협력업체명을 입력하세요"
            required
          />
        </div>
      </CardSection>
      
      <CardSection noBorder>
        <div className="flex gap-2">
          <Button variant="secondary" icon={Save}>임시저장</Button>
          <Button variant="primary" icon={Send}>제출</Button>
        </div>
      </CardSection>
    </Card>
  );
}
```

## 💡 베스트 프랙티스

1. **일관성**: 모든 페이지에서 동일한 컴포넌트와 스타일 사용
2. **접근성**: 필수 입력 필드에 `*` 표시, 적절한 라벨 제공
3. **반응형**: 모바일 우선 접근 방식
4. **시각적 피드백**: 호버, 포커스, 액티브 상태 명확히 표시
5. **컬러 사용**: 
   - 오렌지: 중요한 액션, 안전 관련 요소
   - 네이비: 전문성, 신뢰
   - 회색: 보조 정보, 비활성 상태

## 📦 파일 구조

```
/styles
  ├── globals.css          # 전역 스타일
  └── design-system.css    # 디자인 시스템 CSS 변수

/components
  └── ui
      ├── Button.tsx       # 버튼 컴포넌트
      ├── Input.tsx        # 입력 필드
      ├── Select.tsx       # 드롭다운
      ├── Textarea.tsx     # 텍스트 영역
      ├── Card.tsx         # 카드 & 섹션
      ├── FileUpload.tsx   # 파일 업로드
      └── Alert.tsx        # 알림 박스

/docs
  └── DESIGN_SYSTEM.md     # 이 문서
```

## 🔧 커스터마이징

스타일을 변경하려면 `/styles/design-system.css`의 CSS 변수를 수정하세요:

```css
:root {
  --color-primary-orange: #FF6B35;  /* 원하는 색상으로 변경 */
  --color-primary-navy: #1a2332;
  /* ... */
}
```

## 📞 지원

디자인 시스템 관련 질문이나 개선 사항은 개발팀에 문의하세요.
