import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail } from 'lucide-react'

export default function Booking() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    // Load Cal.com embed
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "speed-booking", {origin:"https://app.cal.com"});
      Cal.ns["speed-booking"]("inline", {
        elementOrSelector:"#speed-cal-booking",
        config: {"layout":"month_view","theme":"dark"},
        calLink: "speed-exec/sales-exec",
      });
      Cal.ns["speed-booking"]("ui", {"hideEventTypeDetails":false,"layout":"month_view","theme":"dark"});
    `
    document.body.appendChild(script)

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen pt-28 pb-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-electric-blue tracking-widest uppercase block mb-4">
            [ Let's Talk ]
          </span>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">
            Book Your Strategy Call
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            30 minutes. No commitment. Let's scope your project and see if we're a fit.
          </p>

          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-neon-lime" />
            <a
              href="mailto:speedexec@proton.me"
              className="text-sm font-mono hover:text-foreground transition-colors"
            >
              speedexec@proton.me
            </a>
          </div>
        </motion.div>

        {/* Cal.com embed */}
        <motion.div
          className="glass-card rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div
            id="speed-cal-booking"
            style={{ width: '100%', minHeight: '600px' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
