# AthLab Landing Page

A hyper-futuristic, immersive landing page for AthLab - an advanced AI-driven training and performance coaching platform.

## 🚀 Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lenis** for buttery smooth scrolling
- **Lucide React** for icons
- **GSAP** for advanced animations

## 🎨 Design Features

- **Clean navy-focused design** with strategic mint accents
- **Brighter, more saturated navy backgrounds** (245° hue, increased saturation)
- **Selective glow usage** - only for prominent elements (Q4 2025, key highlights)
- **Navy cards and borders** for cohesive, clean layout
- **Natural glow effects** with exponential falloff (4px → 8px → 16px → 32px → 64px)
- **Lenis smooth scrolling** for ultra-smooth page experience
- **Single focused problem statement** (no cycling distractions)
- **Responsive typography** with lighter font weights
- **Advanced micro-interactions** with cubic-bezier easing

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind
│   ├── layout.tsx       # Root layout with font setup
│   └── page.tsx         # Main landing page
├── components/
│   ├── BackgroundEffects.tsx  # Animated background
│   ├── HeroSection.tsx         # Hero with problem animation
│   ├── HowItWorksSection.tsx   # Interactive modules
│   └── CTASection.tsx          # CTA with grid background
```

## 🔧 Font Setup Instructions

### 1. Add Font Files

Create a `public/fonts/` directory and add your variable font files:

```
public/
└── fonts/
    ├── ClashDisplay-Variable.woff2
    └── SpaceGrotesk-Variable.woff2
```

### 2. Font Integration

The fonts are already configured in `src/app/layout.tsx`. The system will:

- **Preload** fonts for optimal performance
- **Define** font faces with proper variable weight ranges
- **Apply** CSS custom properties for Tailwind integration

### 3. Font Usage

Use the configured font classes in your components:

```jsx
// Headings
<h1 className="font-clash font-bold">Heading</h1>

// Body text (default weight 300)
<p className="font-space font-light">Body text</p>

// Bold body text (weight 500)
<p className="font-space font-medium">Bold body text</p>
```

## 🎯 Key Sections

### Hero Section
- **Single prominent problem statement** (no cycling distractions)
- **Clean gradient text effects** with strategic glow
- **AthLab logo integration** with Next.js Image optimization
- **Refined scroll indicator** with smooth timing

### How It Works Section
- **Clean navy cards** with subtle navy borders
- **Step-by-step process** (Generate → Train → Optimize)
- **Minimal hover effects** (no excessive glow)
- **Performance metrics** showcase in navy containers

### CTA Section
- **Dynamic grid background** with floating elements
- **Email signup form** with validation ready
- **"Launching Q4 2025"** prominently featured
- **Disabled app store buttons** (coming soon state)

## 🎨 Color Scheme

```css
/* Deep Navy (HSL 245) */
navy-950: hsl(245, 45%, 4%)    /* Background */
navy-900: hsl(245, 40%, 8%)    /* Cards */
navy-800: hsl(245, 35%, 15%)   /* Elements */

/* Cyber Turquoise (HSL 155, 98%, 50%) */
cyber-500: hsl(155, 98%, 50%)  /* Primary accent */
cyber-300: hsl(155, 98%, 65%)  /* Lighter variant */

/* Matte Darks */
matte-500: hsl(0, 0%, 4%)      /* Pure dark */
```

## ⚡ Custom Animations

- **glow-pulse**: Cyber glow effect with scale
- **float**: Vertical floating motion
- **gradient-shift**: Background gradient animation
- **Framer Motion**: Scroll-triggered animations

## 🛠️ Development

### Prerequisites
- Node.js 18+ installed
- npm package manager

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your fonts** to `public/fonts/`

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

The project is fully optimized for **Vercel deployment** at **athlab.io**:

```bash
# Connect to Vercel
npx vercel --prod

# Or deploy via Vercel Dashboard:
# 1. Import GitHub repository
# 2. Set custom domain to athlab.io
# 3. Deploy automatically
```

**Vercel Optimizations:**
- Automatic static optimization
- Image optimization with WebP/AVIF
- Font preloading for performance
- Security headers configured
- Cache optimization for static assets
- Responsive breakpoints optimized

### Environment Variables
No environment variables required for basic deployment.

### Custom Domain Setup
1. Add `athlab.io` to your Vercel project
2. Configure DNS records as prompted by Vercel
3. SSL certificate will be automatically provisioned

## 📱 Mobile Optimization

- **Mobile-first design** approach
- **Touch-friendly** interactive elements
- **Responsive typography** scaling
- **Optimized animations** for mobile performance
- **Lazy loading** for images and heavy content

## 🎯 Performance Features

- **Font preloading** for faster text rendering
- **Component-level** code splitting
- **Optimized animations** with Framer Motion
- **Compressed assets** and modern image formats
- **Minimal bundle size** with tree shaking

## 📝 Content Strategy

The copy positions AthLab as:
- **Future-focused**: "The future of training"
- **Data-driven**: Backed by AI and real-time data
- **Elite-targeted**: "Built for those who refuse to settle for average"
- **Personalized**: Unique training blueprints
- **Results-oriented**: Proven metrics and outcomes

---

**Built with precision for athletes who demand excellence** 🏆 