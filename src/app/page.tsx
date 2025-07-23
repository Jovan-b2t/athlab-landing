import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import BackgroundEffects from '@/components/BackgroundEffects'
import SmoothScrolling from '@/components/SmoothScrolling'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <SmoothScrolling />
      <Navbar />
      <main className="relative min-h-screen overflow-hidden">
        <BackgroundEffects />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* How It Works Section */}
        <HowItWorksSection />
        
        {/* CTA Section */}
        <CTASection />
      </main>
    </>
  )
} 