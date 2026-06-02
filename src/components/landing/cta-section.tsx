import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to transform your data?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of data professionals who trust DataClean Pro to keep their data pristine. Start your free trial today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link to="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Talk to Sales
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
