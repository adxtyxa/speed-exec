'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function CompensationStructure() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
            [ The Logic ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black">
            Compensation Structure
          </h2>
        </motion.div>

        {/* Split visualization */}
        <motion.div
          className="glass-intense rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl" />
          
          <div className="relative">
            {/* Split bars */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              {/* Sales Closer */}
              <motion.div
                className="flex-[65] relative"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              >
                <div className="h-24 md:h-32 rounded-2xl bg-gradient-to-r from-accent-blue to-accent-blue-glow flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-primary-foreground">65%</span>
                    <span className="block text-sm font-mono text-primary-foreground/80 uppercase tracking-wider mt-1">Sales Closer</span>
                  </div>
                </div>
              </motion.div>
              
              {/* SPEED */}
              <motion.div
                className="flex-[35] relative"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              >
                <div className="h-24 md:h-32 rounded-2xl border-2 border-accent-blue/50 bg-accent-navy/30 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-4xl md:text-5xl font-black text-foreground">35%</span>
                    <span className="block text-sm font-mono text-muted-foreground uppercase tracking-wider mt-1">SPEED</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Caption */}
            <motion.p
              className="text-center text-xl text-muted-foreground font-mono"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              No justification. Just facts.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
