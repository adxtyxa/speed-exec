import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { DollarSign, Clock, AlertTriangle } from 'lucide-react'

const problems = [
  { icon: DollarSign, label: '$10k–$50k+', desc: 'Average video ad production cost' },
  { icon: Clock, label: '4–8 weeks', desc: 'Typical turnaround time' },
  { icon: AlertTriangle, label: 'Risky', desc: 'No guarantee it converts' },
]

export function ProblemSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Dark gritty overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.span
          className="font-mono text-sm text-electric-blue tracking-widest uppercase block mb-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          [ The Problem ]
        </motion.span>

        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Traditional production is{' '}
          <span className="text-destructive">slow, expensive, and messy.</span>
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Studios, crews, post-production queues — the cost explodes before you even know if it works.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              className="glass-card rounded-2xl p-8 bento-cell"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
            >
              <p.icon className="w-8 h-8 text-destructive mb-4 mx-auto" />
              <h3 className="text-3xl font-black mb-2">{p.label}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
