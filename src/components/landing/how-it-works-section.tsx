import { motion } from 'framer-motion'
import { Upload, Settings, Download, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    name: 'Upload Your Data',
    description: 'Drag and drop your CSV, Excel, or connect directly to your database. We support 50+ data sources.',
    icon: Upload,
  },
  {
    number: '02',
    name: 'Configure Rules',
    description: 'Choose from our pre-built cleaning rules or create custom ones. Our AI suggests the best approach.',
    icon: Settings,
  },
  {
    number: '03',
    name: 'Export Clean Data',
    description: 'Download your cleaned dataset in any format or push directly to your data warehouse.',
    icon: Download,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary"
          >
            HOW IT WORKS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Clean data in three simple steps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Get from messy data to actionable insights in minutes, not hours.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <step.icon className="h-7 w-7" />
                    </div>
                    <span className="text-5xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.name}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-1rem)] w-8">
                    <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 mx-auto max-w-4xl"
        >
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Before */}
              <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4">
                <p className="text-xs font-medium text-destructive mb-3">BEFORE</p>
                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                  <p>John Doe, john@email</p>
                  <p className="text-destructive">NULL, missing</p>
                  <p>Jane doe, JANE@EMAIL.COM</p>
                  <p className="text-destructive">John Doe, john@email</p>
                  <p>12/31/2024, Dec 31</p>
                </div>
              </div>

              {/* Processing */}
              <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
                  <Settings className="h-6 w-6 text-primary animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <p className="text-xs font-medium text-primary">PROCESSING</p>
                <p className="text-xs text-muted-foreground mt-1">AI Cleaning</p>
              </div>

              {/* After */}
              <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4">
                <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-3">AFTER</p>
                <div className="space-y-2 font-mono text-xs text-muted-foreground">
                  <p className="text-green-600 dark:text-green-400">John Doe, john@email.com</p>
                  <p className="text-green-600 dark:text-green-400">N/A, imputed</p>
                  <p className="text-green-600 dark:text-green-400">Jane Doe, jane@email.com</p>
                  <p className="text-muted-foreground/50 line-through">duplicate removed</p>
                  <p className="text-green-600 dark:text-green-400">2024-12-31, 2024-12-31</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
