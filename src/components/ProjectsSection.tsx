import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'Secure File Sharing Platform',
    description: 'A Python-based local file sharing tool over Wi-Fi/LAN using socket programming with TCP-based transmission for secure and reliable file delivery.',
    tech: ['Python', 'React.js', 'Sockets', 'TCP Protocol'],
    features: [
      'Secure peer-to-peer data exchange',
      'Custom file manager UI in React.js',
      'TCP-based reliable transmission',
      'Error handling & performance optimization',
    ],
  },
  {
    title: 'Research Plant Management System',
    description: 'A comprehensive web-based plant research tracking tool for managing plant data, experiments, and status reports with robust back-end logic.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    features: [
      'Plant data & experiment management',
      'Status report generation',
      'Debugging & validation techniques',
      'Thorough QA testing',
    ],
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">04. Projects</p>
          <h2 className="section-heading">Things I've Built</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Folder size={28} />
                </div>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={20} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6">
                {project.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
