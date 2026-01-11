import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Code, Database, Globe, Terminal, Workflow } from 'lucide-react';

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud Technologies',
    skills: ['Google Cloud Platform', 'AWS', 'Cloud Fundamentals', '40+ GCP Certifications'],
    color: 'primary',
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'PHP', 'SQL', 'Bash', 'PowerShell'],
    color: 'accent',
  },
  {
    icon: Database,
    title: 'Database',
    skills: ['MySQL', 'Database Architecture', 'Complex Queries', 'Data Modeling'],
    color: 'primary',
  },
  {
    icon: Globe,
    title: 'E-Commerce & APIs',
    skills: ['RESTful API', 'Amazon Seller Central', 'Walmart Marketplace', 'Shopify', 'ShipStation'],
    color: 'accent',
  },
  {
    icon: Terminal,
    title: 'Dev Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Jira', 'VS Code', 'Selenium'],
    color: 'primary',
  },
  {
    icon: Workflow,
    title: 'Methodologies',
    skills: ['Agile', 'CI/CD Awareness', 'Sprint Support', 'QA Testing', 'Documentation'],
    color: 'accent',
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">03. Skills</p>
          <h2 className="section-heading">What I Work With</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 group"
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                category.color === 'primary' 
                  ? 'bg-primary/10 text-primary group-hover:bg-primary/20' 
                  : 'bg-accent/10 text-accent group-hover:bg-accent/20'
              } transition-colors`}>
                <category.icon size={24} />
              </div>
              
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + sIndex * 0.05 }}
                    className="px-3 py-1 text-sm font-mono rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
