import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = `mailto:rehankumarchaudhari@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`;
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-primary mb-2">05. Contact</p>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading mx-auto mt-4">
            I'm currently open to new opportunities and always happy to connect. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a 
                  href="mailto:rehankumarchaudhari@gmail.com" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  rehankumarchaudhari@gmail.com
                </a>
              </div>
            </div>

            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a 
                  href="tel:+17038146013" 
                  className="font-medium hover:text-primary transition-colors"
                >
                  (703) 814-6013
                </a>
              </div>
            </div>

            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">Chatham, NJ 07928</p>
              </div>
            </div>

            <div className="glass-card-hover p-6 flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/rehanchaudhari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-primary transition-colors"
                >
                  linkedin.com/in/rehanchaudhari
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
