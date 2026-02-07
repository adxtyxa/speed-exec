'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    title: 'Consistent Lead Flow',
    description: 'Never worry about where your next deal is coming from.',
  },
  {
    title: 'Backend Handled',
    description: 'CRM, tracking, admin—we handle it all so you can sell.',
  },
  {
    title: 'Single-Offer Focus',
    description: 'Master one product. No context switching.',
  },
  {
    title: 'Performance-Based Continuation',
    description: 'Hit targets, stay on. Simple accountability.',
  },
]

export function ForClosers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
            [ For Sales Closers ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            Why Join SPEED?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for closers who want to close—not chase leads or manage admin.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative glass-card rounded-2xl p-8 h-full border-gradient hover:border-accent-blue/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-accent-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
