import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Sun, Smartphone, Compass, ChevronDown } from 'lucide-react'

const sections = [
  {
    icon: Sun,
    title: 'Lighting',
    tips: [
      'Use natural window light — avoid harsh overhead fixtures.',
      'Shoot during "golden hour" for warm, cinematic tones.',
      'If indoors, position the product near a large, diffused light source.',
      'Avoid mixed lighting (daylight + tungsten) — pick one.',
    ],
  },
  {
    icon: Smartphone,
    title: 'Stability',
    tips: [
      'Use a $15 phone tripod or lean against a solid surface.',
      'Enable grid lines on your camera app for alignment.',
      'Record in 4K at 30fps for maximum flexibility.',
      'Lock exposure and focus before recording.',
    ],
  },
  {
    icon: Compass,
    title: 'Angles',
    tips: [
      '45° hero angle — the money shot for product photography.',
      'Straight-on front — clean and editorial.',
      'Close-up macro — texture, detail, craftsmanship.',
      'Slow orbit — 5-second smooth arc around the product.',
      'Top-down flat lay — great for smaller items.',
    ],
  },
]

function CollapsibleSection({ section, index, inView }: { section: typeof sections[0], index: number, inView: boolean }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden bento-cell"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 * index, duration: 0.5 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-6 text-left cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl glass-intense flex items-center justify-center flex-shrink-0">
          <section.icon className="w-6 h-6 text-neon-lime" />
        </div>
        <h3 className="text-xl font-bold flex-1">{section.title}</h3>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="px-6 pb-6 space-y-3">
              {section.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-electric-blue font-mono text-xs mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ShootLab() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-neon-lime tracking-widest uppercase block mb-4">
            [ The Shoot Lab ]
          </span>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            On-site Phone Shoot Checklist
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Follow these tips and your raw footage will give us everything we need to create magic.
          </p>
        </motion.div>

        <div className="space-y-4">
          {sections.map((s, i) => (
            <CollapsibleSection key={s.title} section={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
