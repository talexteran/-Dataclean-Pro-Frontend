import { motion } from 'framer-motion'
import {
  Copy,
  AlertCircle,
  FileText,
  CheckCircle,
  TrendingUp,
  Lightbulb,
} from 'lucide-react'

const features = [
  {
    name: 'Duplicate Detection',
    description: 'Automatically identify and remove duplicate records using fuzzy matching algorithms.',
    icon: Copy,
  },
  {
    name: 'Missing Value Handler',
    description: 'Smart imputation strategies to fill gaps in your data without losing context.',
    icon: AlertCircle,
  },
  {
    name: 'Format Standardization',
    description: 'Normalize dates, phone numbers, addresses, and other formats automatically.',
    icon: FileText,
  },
  {
    name: 'Data Validation',
    description: 'Validate data against custom rules and business logic with detailed reports.',
    icon: CheckCircle,
  },
  {
    name: 'Outlier Detection',
    description: 'Statistical analysis to identify and handle anomalies in your datasets.',
    icon: TrendingUp,
  },
  {
    name: 'Smart Suggestions',
    description: 'AI-powered recommendations for data cleaning based on your specific use case.',
    icon: Lightbulb,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary"
          >
            POWERFUL FEATURES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance"
          >
            Everything you need to clean your data
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Our comprehensive toolkit handles the most common data quality issues, so you can focus on analysis instead of data preparation.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
