import { motion } from 'framer-motion';
import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import Scene3D from './Scene3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Content */}
      <div className="container relative z-20 px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary mb-4"
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 glow-text"
          >
            Rehankumar
            <br />
            <span className="gradient-text">Chaudhari</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono"
          >
            Computer Systems Analyst & Cloud Specialist
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Results-driven IT professional with 40+ Google Cloud certifications, 
            specializing in data analysis, e-commerce integrations, and cloud technologies.
          </motion.p>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="mailto:rehankumarchaudhari@gmail.com"
              className="p-3 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rehanchaudhari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card-hover rounded-full text-muted-foreground hover:text-primary"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold transition-all duration-300 hover:bg-primary/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-foreground hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
