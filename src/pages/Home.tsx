import { HeroSection } from '@/components/speed/HeroSection'
import { ProblemSection } from '@/components/speed/ProblemSection'
import { SolutionSection } from '@/components/speed/SolutionSection'
import { ProcessSteps } from '@/components/speed/ProcessSteps'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <ProblemSection />
      <div className="section-divider" />
      <SolutionSection />
      <div className="section-divider" />
      <ProcessSteps />
    </>
  )
}
