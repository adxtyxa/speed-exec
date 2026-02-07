'use client'

import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 mesh-gradient mesh-animate" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-blue/20 blur-3xl float-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-cyan/10 blur-3xl float-orb-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-navy/30 blur-3xl" />
      
      {/* Glass spheres decoration */}
      <motion.div 
        className="absolute top-20 right-[15%] w-20 h-20 rounded-full glass-card float-orb"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
      <motion.div 
        className="absolute bottom-32 left-[10%] w-12 h-12 rounded-full glass-intense float-orb-delayed"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      />
      <motion.div 
        className="absolute top-1/3 left-[5%] w-8 h-8 rounded-full bg-accent-blue/40 blur-sm float-orb"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient-blue">SPEED</span>
        </motion.h1>
        
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A performance-driven sales enablement agency built on{' '}
          <span className="text-foreground font-semibold">execution</span> and{' '}
          <span className="text-foreground font-semibold">accountability</span>.
        </motion.p>
        
        <motion.div
          className="mt-12 flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="font-mono text-sm text-muted-foreground tracking-wider">
            [ SCROLL TO EXPLORE ]
          </span>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
