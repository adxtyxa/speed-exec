'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    title: 'High-Volume Lead Supply',
    subtitle: 'Intent-Driven Targeting',
    description: 'Qualified leads at scale. We identify and deliver prospects who are actively seeking solutions like yours.',
    gradient: 'from-accent-blue/20 to-transparent',
  },
  {
    title: 'Dedicated Sales Closers',
    subtitle: 'Revenue Execution',
    description: 'Battle-tested closers who understand urgency. They handle the entire sales cycle from demo to signature.',
    gradient: 'from-accent-cyan/20 to-transparent',
  },
  {
    title: 'Backend Sales Operations',
    subtitle: 'Infrastructure & Systems',
    description: 'CRM, follow-ups, tracking, and reporting. The operational backbone that enables consistent performance.',
    gradient: 'from-accent-navy/40 to-transparent',
  },
]

export function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-navy/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-accent-blue tracking-wider uppercase mb-4 block">
            [ What We Do ]
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            The Function
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three interconnected capabilities that drive revenue.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative glass-card rounded-3xl p-10 h-full hover:border-accent-blue/40 transition-all duration-300">
                <span className="font-mono text-xs text-accent-blue tracking-wider uppercase">
                  {service.subtitle}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative line */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
