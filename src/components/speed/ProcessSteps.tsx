import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Upload, Sparkles } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Camera,
    title: 'Shoot',
    desc: 'Grab your phone. Film your product from a few angles — natural light, simple background. No pro gear needed.',
  },
  {
    num: '02',
    icon: Upload,
    title: 'Upload',
    desc: 'Send us the raw clips via our portal. Add any notes on vibe, color, or brand direction.',
  },
  {
    num: '03',
    icon: Sparkles,
    title: 'Receive',
    desc: 'We deliver a polished, high-end commercial with 3D compositing, motion graphics, and color grading — ready to run.',
  },
]

export function ProcessSteps() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-electric-blue tracking-widest uppercase block mb-4">
            [ How It Works ]
          </span>
          <h2 className="text-4xl sm:text-5xl font-black">
            Three steps. That's it.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue/40 via-neon-lime/30 to-transparent" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex gap-8 md:gap-12 items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
              >
                {/* Step indicator */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl glass-intense flex items-center justify-center">
                  <step.icon className="w-7 h-7 md:w-10 md:h-10 text-neon-lime" />
                </div>

                <div className="pt-2 md:pt-4">
                  <span className="font-mono text-xs text-electric-blue tracking-widest">{step.num}</span>
                  <h3 className="text-2xl md:text-3xl font-black mt-1 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
