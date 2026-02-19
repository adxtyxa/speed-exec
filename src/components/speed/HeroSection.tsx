import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const headlineWords = 'Commercial grade ads. Made from your phone footage.'.split(' ')

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-electric-blue/15 blur-[100px] float-orb" />
      <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-neon-lime/8 blur-[120px] float-orb-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-navy-mid/40 blur-[150px]" />

      {/* Decorative glass shapes */}
      <motion.div
        className="absolute top-24 right-[12%] w-24 h-24 rounded-2xl glass-card float-orb rotate-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
      <motion.div
        className="absolute bottom-36 left-[8%] w-16 h-16 rounded-full glass-intense float-orb-delayed"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Staggered headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.95] mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {word === 'phone' || word === 'footage.' ? (
                <span className="text-gradient-lime">{word}</span>
              ) : word === 'Commercial' || word === 'grade' ? (
                <span className="text-gradient-blue">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
        >
          Upload simple clips you shoot on your phone. We transform them into high-end product commercials
          using <span className="text-foreground font-semibold">Blender + AI</span> — faster and at a fraction of the cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <Link
            to="/booking"
            className="inline-block glow-button px-10 py-4 rounded-xl text-lg font-bold text-primary-foreground tracking-wide pulse-scale"
          >
            Book Your Strategy Call
          </Link>
        </motion.div>
      </div>

      {/* Scrolling ticker */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/60 backdrop-blur-sm overflow-hidden">
        <div className="ticker-scroll flex items-center gap-12 py-4 whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-sm font-mono text-muted-foreground tracking-wider">
              <span>NO CREW</span>
              <span className="text-neon-lime">●</span>
              <span>NO STUDIO</span>
              <span className="text-electric-blue">●</span>
              <span>NO EXTRA TECH</span>
              <span className="text-neon-lime">●</span>
              <span>COMMERCIAL GRADE</span>
              <span className="text-electric-blue">●</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
