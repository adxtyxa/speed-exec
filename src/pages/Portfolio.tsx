import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'

const filters = ['All', 'Real Estate', 'Auto', 'Luxury', 'D2C']

const projects = [
  { id: 1, title: 'Luxury Watch — 3D Compositing', category: 'Luxury', aspect: 'aspect-video' },
  { id: 2, title: 'EV Launch Spot — Motion Graphics', category: 'Auto', aspect: 'aspect-[4/5]' },
  { id: 3, title: 'Penthouse Tour — Cinematic Grade', category: 'Real Estate', aspect: 'aspect-video' },
  { id: 4, title: 'Skincare Line — Product Hero', category: 'D2C', aspect: 'aspect-square' },
  { id: 5, title: 'Supercar Detail — Phantom Drone', category: 'Auto', aspect: 'aspect-video' },
  { id: 6, title: 'Estate Walkthrough — Day-to-Night', category: 'Real Estate', aspect: 'aspect-[4/5]' },
  { id: 7, title: 'Fragrance Spot — Particle FX', category: 'Luxury', aspect: 'aspect-video' },
  { id: 8, title: 'Streetwear Drop — Urban Grade', category: 'D2C', aspect: 'aspect-square' },
  { id: 9, title: 'Yacht Reveal — Aerial Composite', category: 'Luxury', aspect: 'aspect-video' },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section ref={ref} className="relative min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-electric-blue tracking-widest uppercase block mb-4">
            [ Portfolio ]
          </span>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">The Proof.</h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Phone footage in. Commercial-grade ads out. See the transformations.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? 'bg-electric-blue text-primary-foreground'
                  : 'glass-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              className={`glass-card rounded-2xl overflow-hidden bento-cell group cursor-pointer break-inside-avoid ${p.aspect}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="w-14 h-14 rounded-full bg-electric-blue/90 flex items-center justify-center">
                  <Play className="w-6 h-6 text-primary-foreground ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <span className="font-mono text-xs text-neon-lime tracking-wider">{p.category}</span>
                <h3 className="text-lg font-bold mt-1">{p.title}</h3>
              </div>
              {/* Placeholder gradient fill */}
              <div className="w-full h-full bg-gradient-to-br from-navy-mid to-deep-navy" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky sidebar CTA */}
      <div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/booking"
          className="glass-intense rounded-2xl p-5 flex flex-col items-center gap-3 hover:scale-105 transition-transform"
        >
          <span className="text-xs font-mono text-neon-lime tracking-wider text-center">GET AN AD<br/>LIKE THIS</span>
          <ArrowRight className="w-5 h-5 text-electric-blue" />
        </Link>
      </div>
    </section>
  )
}
