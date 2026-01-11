import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, Cloud } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">01. About Me</p>
          <h2 className="section-heading">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a results-driven IT professional with strong expertise in{' '}
              <span className="text-primary">data analysis</span>,{' '}
              <span className="text-primary">cloud technologies</span>, and customer-focused solutions. 
              With a proven track record of leveraging data insights to drive business decisions, 
              I help organizations reduce costs and improve operational efficiency.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My experience spans from integrating e-commerce platforms like{' '}
              <span className="text-primary">Amazon</span>, <span className="text-primary">Walmart</span>, 
              and <span className="text-primary">Shopify</span> to developing robust database solutions 
              and automating workflows using Python and SQL.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about translating complex technical concepts into actionable 
              recommendations for stakeholders and providing seamless customer experiences.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Education Card */}
            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">M.S. in IT Project Management</h3>
                  <p className="text-muted-foreground text-sm">Cumberland University • GPA: 3.82/4.0</p>
                  <p className="text-muted-foreground text-sm mt-1">Aug 2025 | Lebanon, TN</p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">B.Tech in Information Technology</h3>
                  <p className="text-muted-foreground text-sm">Ganpat University • GPA: 3.84/4.0</p>
                  <p className="text-muted-foreground text-sm mt-1">May 2023 | Mehsana, India</p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass-card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Cloud size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Google Cloud Certified</h3>
                  <p className="text-muted-foreground text-sm">40+ Google Cloud Certifications</p>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">GCP</span>
                    <span className="px-2 py-1 text-xs font-mono rounded bg-primary/10 text-primary">AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
