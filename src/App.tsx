import { HeroSection } from './components/speed/HeroSection'
import { WhoWeAre } from './components/speed/WhoWeAre'
import { WhatWeDo } from './components/speed/WhatWeDo'
import { OperatingModel } from './components/speed/OperatingModel'
import { CompensationStructure } from './components/speed/CompensationStructure'
import { BackendSupport } from './components/speed/BackendSupport'
import { ForClosers } from './components/speed/ForClosers'
import { CTASection } from './components/speed/CTASection'
import { SpeedFooter } from './components/speed/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative">
        <HeroSection />
        
        {/* Divider */}
        <div className="section-divider" />
        
        <WhoWeAre />
        
        <WhatWeDo />
        
        <OperatingModel />
        
        <CompensationStructure />
        
        <BackendSupport />
        
        <ForClosers />
        
        <CTASection />
      </main>
      
      <SpeedFooter />
    </div>
  )
}
