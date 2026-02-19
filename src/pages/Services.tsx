import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    tagline: 'Test the waters',
    features: [
      '1 commercial-grade ad',
      'Basic 3D compositing',
      'Color grading',
      '1 round of revisions',
      '7-day delivery',
    ],
    accent: false,
  },
  {
    name: 'Growth',
    tagline: 'Scale your content',
    features: [
      '3 commercial-grade ads',
      'Advanced 3D scenes',
      'Motion graphics package',
      'Creative direction',
      '2 rounds of revisions',
      '5-day delivery',
    ],
    accent: true,
  },
  {
    name: 'Premium',
    tagline: 'Full creative partnership',
    features: [
      '6+ commercial-grade ads',
      'Cinematic 3D environments',
      'Full motion graphics suite',
      'Dedicated creative director',
      'Unlimited revisions',
      'Priority 3-day delivery',
      'Monthly strategy call',
    ],
    accent: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-electric-blue tracking-widest uppercase block mb-4">
            [ Services & Packages ]
          </span>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">Built to Scale.</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every tier delivers commercial-grade output. No pricing listed — every project is scoped to your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`rounded-3xl p-8 flex flex-col bento-cell ${
                tier.accent
                  ? 'glass-intense border-electric-blue/30'
                  : 'glass-card'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
            >
              {tier.accent && (
                <span className="self-start px-3 py-1 rounded-full bg-neon-lime/15 text-neon-lime text-xs font-mono tracking-wider mb-4">
                  POPULAR
                </span>
              )}
              <h3 className="text-2xl font-black mb-1">{tier.name}</h3>
              <p className="text-muted-foreground text-sm mb-8">{tier.tagline}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-neon-lime mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all ${
                  tier.accent
                    ? 'glow-button text-primary-foreground'
                    : 'glass-card hover:border-electric-blue/40 text-foreground'
                }`}
              >
                Book a Call for Custom Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
