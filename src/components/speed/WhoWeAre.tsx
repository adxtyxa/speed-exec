'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const pillars = [
  {
    title: 'Lean',
    description: 'No bloat. No overhead. Every resource drives revenue.',
    icon: '⚡',
  },
  {
    title: 'Remote',
    description: 'Global talent. Zero geographic constraints. Always on.',
    icon: '🌐',
  },
  {
    title: 'Outcome-driven',
    description: 'We measure what matters. Revenue closed. Deals won.',
    icon: '📊',
  },
  {
    title: 'Commission-aligned',
    description: 'We only win when you win. Skin in the game.',
    icon: '🤝',
  },
]

export function WhoWeAre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
            [ Who We Are ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
            Built Different
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="glass-card rounded-2xl p-8 hover:border-accent-blue/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
