import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Computer Systems Analyst',
    company: 'Rocket 3PL Inc.',
    location: 'Fairfield, NJ',
    period: 'Oct 2025 – Present',
    highlights: [
      'Analyzed IT infrastructure for logistics operations and identified optimization opportunities for database systems and e-commerce platform integrations',
      'Integrated logistics software with e-commerce platforms (Amazon, Walmart, ShipStation) to streamline data flow',
      'Developed and maintained SQL databases for inventory tracking and order management systems',
      'Ensured data security standards and system performance optimization for mission-critical applications',
    ],
  },
  {
    title: 'E-Commerce Integration Specialist',
    company: 'ConducTv Brands LLC',
    location: 'Fairfield, NJ',
    period: 'Oct 2024 – Present',
    highlights: [
      'Led end-to-end integration of e-commerce platforms including Amazon, Walmart, Shopify, GB Commerce, and SPS Commerce using RESTful APIs',
      'Conducted real-time debugging and resolution of system bugs, enhancing product listing accuracy by 35%',
      'Automated product SKU and pricing updates using custom scripts, reducing manual workload',
      'Collaborated cross-functionally with product, logistics, and sales teams to streamline inventory synchronization',
    ],
  },
  {
    title: 'PHP & MySQL Development Intern',
    company: 'Green Circle Technology LLC',
    location: 'Mehsana, India',
    period: 'Jan 2023 – May 2023',
    highlights: [
      'Developed and deployed internal web applications using PHP, MySQL, and Bootstrap',
      'Wrote optimized SQL queries and implemented database normalization',
      'Identified and resolved code defects during QA cycles, contributing to faster sprint completion',
      'Assisted in testing, user training, and documentation for web-based internal tools',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">02. Experience</p>
          <h2 className="section-heading">Where I've Worked</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />
              
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                className="absolute left-0 top-0 w-3 h-3 -translate-x-[5px] rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)/0.8)]"
              />
              
              <div className="glass-card-hover p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {exp.title}
                      <span className="text-primary"> @ {exp.company}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
