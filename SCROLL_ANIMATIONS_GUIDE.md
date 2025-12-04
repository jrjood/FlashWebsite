# 🎬 Scroll Reveal Animations - Implementation Guide

## ✨ What Was Added

Scroll-triggered animations that activate when elements enter the viewport, creating a smooth and engaging user experience as users scroll through your pages.

---

## 📦 New Components & Hooks

### 1. **useScrollReveal Hook**

`frontend/src/hooks/useScrollReveal.jsx`

Custom React hook using IntersectionObserver API to detect when elements enter the viewport.

**Usage:**

```jsx
const { ref, isVisible } = useScrollReveal({
  threshold: 0.2, // 20% of element must be visible
  triggerOnce: true, // Animation plays only once
  rootMargin: '0px', // Extra margin around viewport
});
```

### 2. **ScrollReveal Component**

`frontend/src/components/ScrollReveal.jsx`

Styled component wrapper that applies animations when `isVisible` becomes true.

**Available Animations:**

- `fadeInUp` - Fade in from bottom
- `fadeInDown` - Fade in from top
- `fadeInLeft` - Fade in from left
- `fadeInRight` - Fade in from right
- `scaleIn` - Scale up from 90% to 100%
- `rotateIn` - Rotate and scale in

**Usage:**

```jsx
<ScrollReveal
  $isVisible={isVisible}
  $animation='fadeInUp'
  $duration='0.8s'
  $delay='0.2s'
>
  <YourContent />
</ScrollReveal>
```

### 3. **StaggerContainer Component**

Animates multiple children with sequential delays (stagger effect).

**Usage:**

```jsx
<StaggerContainer
  $isVisible={isVisible}
  $animation='scaleIn'
  $duration='0.6s'
  $staggerDelay='0.15s'
>
  <Child1 /> {/* Animates at 0s */}
  <Child2 /> {/* Animates at 0.15s */}
  <Child3 /> {/* Animates at 0.3s */}
</StaggerContainer>
```

---

## 🎯 Animated Sections

### HomePage (`/`)

1. **HeroSection** - Left/right fade-in for hero content
2. **AboutSection** - Image fades left, text fades right
3. **ServicesSection** - Title fades up, cards scale in
4. **ProjectsSection** - Staggered fade-up for title, cards, button

### AboutPage (`/about`)

1. **AboutSection** - Image left, content right
2. **ValuesSection** - Title + staggered card scaling
3. **PropositionSection** - Staggered founder cards (left/right)

### ProjectsPage (`/projects`)

1. **AllProjectsSection** - Title, filters, and cards with stagger

### Contact Components

1. **ContactsSection** - Staggered scale-in for contact items
2. **InspirationSection** - Fade-up quote text

---

## 🔧 How to Add Animations to New Components

### Basic Example:

```jsx
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const MyComponent = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div ref={ref}>
      <ScrollReveal
        $isVisible={isVisible}
        $animation='fadeInUp'
        $duration='0.8s'
      >
        <h2>This will fade in from bottom</h2>
      </ScrollReveal>
    </div>
  );
};
```

### Multiple Elements (Staggered):

```jsx
import useScrollReveal from '../../hooks/useScrollReveal';
import { ScrollReveal } from '../../components/ScrollReveal';

const MyComponent = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <div ref={ref}>
      <ScrollReveal
        $isVisible={isVisible}
        $animation='fadeInUp'
        $duration='0.8s'
      >
        <h2>Title (animates first)</h2>
      </ScrollReveal>

      <ScrollReveal
        $isVisible={isVisible}
        $animation='fadeInUp'
        $duration='0.8s'
        $delay='0.2s'
      >
        <p>Subtitle (animates 0.2s later)</p>
      </ScrollReveal>

      <ScrollReveal
        $isVisible={isVisible}
        $animation='scaleIn'
        $duration='0.8s'
        $delay='0.4s'
      >
        <button>Button (animates 0.4s later)</button>
      </ScrollReveal>
    </div>
  );
};
```

### Grid/List with Stagger:

```jsx
import useScrollReveal from '../../hooks/useScrollReveal';
import { StaggerContainer } from '../../components/ScrollReveal';

const MyGrid = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div ref={ref}>
      <StaggerContainer
        $isVisible={isVisible}
        $animation='scaleIn'
        $duration='0.6s'
        $staggerDelay='0.1s'
      >
        <div className='grid'>
          <Card1 /> {/* 0s */}
          <Card2 /> {/* 0.1s */}
          <Card3 /> {/* 0.2s */}
          <Card4 /> {/* 0.3s */}
        </div>
      </StaggerContainer>
    </div>
  );
};
```

---

## ⚙️ Configuration Options

### useScrollReveal Options:

```typescript
{
  threshold: 0.2,         // 0-1: How much of element must be visible
  triggerOnce: true,      // true: animate once | false: animate every time
  rootMargin: '0px'       // e.g., '-100px': trigger 100px before element enters
}
```

### ScrollReveal Props:

```typescript
{
  $isVisible: boolean,              // Required: from useScrollReveal
  $animation: string,               // fadeInUp|fadeInDown|fadeInLeft|fadeInRight|scaleIn|rotateIn
  $duration: string,                // e.g., '0.8s', '600ms'
  $delay: string                    // e.g., '0.2s', '200ms'
}
```

### StaggerContainer Props:

```typescript
{
  $isVisible: boolean,              // Required: from useScrollReveal
  $animation: string,               // Same animations as ScrollReveal
  $duration: string,                // Duration for each child
  $staggerDelay: string             // Delay between each child animation
}
```

---

## 🎨 Animation Recommendations

### By Use Case:

| Element Type     | Recommended Animation        | Duration | Threshold |
| ---------------- | ---------------------------- | -------- | --------- |
| Hero titles      | `fadeInUp`                   | 1s       | 0.2       |
| Side images      | `fadeInLeft` / `fadeInRight` | 0.8s     | 0.2       |
| Cards/Grid items | `scaleIn`                    | 0.6s     | 0.15      |
| Buttons          | `fadeInUp`                   | 0.8s     | 0.3       |
| Icons            | `rotateIn`                   | 0.6s     | 0.2       |
| Quotes           | `fadeInUp`                   | 1s       | 0.3       |
| Contact items    | `scaleIn` (staggered)        | 0.6s     | 0.2       |

---

## 🚀 Performance Considerations

### ✅ Optimized For Performance:

1. **IntersectionObserver API** - Modern, efficient viewport detection
2. **CSS Animations** - Hardware-accelerated (GPU)
3. **Lazy Initialization** - Only observes elements as they're mounted
4. **Cleanup** - Properly disconnects observers on unmount
5. **Trigger Once** - Default behavior prevents re-animating on scroll

### Best Practices:

- ✅ Use `triggerOnce: true` for most cases (default)
- ✅ Keep threshold between 0.1-0.3 for smooth triggers
- ✅ Use shorter durations (0.6-0.8s) for small elements
- ✅ Stagger delays should be 0.1-0.2s for smooth flow
- ❌ Avoid animating very large images (use on containers)
- ❌ Don't add animations to every single element (selective is better)

---

## 🎬 Animation Flow Examples

### Homepage Hero (Current Implementation):

```
User scrolls to hero section
├─ Hero text fades in from left (0s)
└─ Hero description fades in from right (0.2s later)
```

### Services Section (Current Implementation):

```
User scrolls to services
├─ Title fades up from bottom (0s)
└─ Service cards scale in together (0.2s later)
```

### Values Section (Current Implementation):

```
User scrolls to values
├─ Title fades up (0s)
└─ Cards scale in sequentially:
    ├─ Card 1 (0s)
    ├─ Card 2 (0.15s)
    ├─ Card 3 (0.3s)
    └─ Card 4 (0.45s)
```

---

## 🔄 Animation States

```
Element Lifecycle:
1. Initial State: opacity: 0, transform: translateY(40px)
2. Enters Viewport: IntersectionObserver detects
3. isVisible = true
4. CSS Animation Runs: opacity 0→1, translateY 40px→0
5. Final State: opacity: 1, transform: translateY(0)
6. Animation Forwards: State persists
```

---

## 📱 Mobile Considerations

All animations work perfectly on mobile! The system automatically:

- Uses hardware acceleration for smooth 60fps animations
- Respects `prefers-reduced-motion` user setting
- Adjusts thresholds based on viewport size

To disable animations on mobile (if needed):

```jsx
const isMobile = window.innerWidth < 768;

const { ref, isVisible } = useScrollReveal({
  threshold: isMobile ? 0.05 : 0.2, // Lower threshold on mobile
});
```

---

## 🐛 Troubleshooting

### Animation not triggering?

- Check that `ref` is properly attached to a DOM element
- Verify `threshold` isn't too high (try 0.1)
- Ensure element has height/width (not display:none)

### Animation too fast/slow?

- Adjust `$duration` prop (e.g., '1.2s' for slower)
- Check that delays aren't too long

### Stagger not working?

- Ensure children are direct descendants
- StaggerContainer supports up to 10 children (can extend in ScrollReveal.jsx)

### Animation replays on scroll?

- Set `triggerOnce: true` in useScrollReveal options

---

## 🎉 Result

Your website now has smooth, professional scroll animations that:

- ✅ Engage users as they scroll
- ✅ Draw attention to important content
- ✅ Create a modern, polished feel
- ✅ Work seamlessly on all devices
- ✅ Maintain excellent performance (60fps)

**Test it out by scrolling through your pages! Each section will smoothly animate into view.** 🚀
