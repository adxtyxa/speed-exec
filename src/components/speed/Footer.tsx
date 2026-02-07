'use client'

import { motion } from 'framer-motion'

export function SpeedFooter() {
  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl font-black text-gradient-blue">
              SPEED
            </span>
          </motion.div>
          
          {/* Tagline */}
          <motion.p
            className="text-muted-foreground font-mono text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Performance-driven sales enablement
          </motion.p>
          
          {/* Copyright */}
          <motion.p
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            © {new Date().getFullYear()} SPEED. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
