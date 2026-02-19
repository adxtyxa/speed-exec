import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Zap, BadgeCheck } from 'lucide-react'

const badges = [
  { icon: Zap, text: 'Half the cost' },
  { icon: BadgeCheck, text: 'Much faster' },
  { icon: Smartphone, text: 'Commercial-grade finish' },
]

export function SolutionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Bright transition gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-electric-blue/5 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-blue/8 blur-[150px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.span
          className="font-mono text-sm text-neon-lime tracking-widest uppercase block mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          [ The Solution ]
        </motion.span>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Your phone is the only tool{' '}
          <span className="text-gradient-lime">you need.</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Shoot basic clips. We handle the magic — 3D compositing, color grading, motion graphics, and delivery.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.text}
              className="glass-intense rounded-full px-6 py-3 flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
            >
              <b.icon className="w-5 h-5 text-neon-lime" />
              <span className="text-sm font-semibold tracking-wide">{b.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
