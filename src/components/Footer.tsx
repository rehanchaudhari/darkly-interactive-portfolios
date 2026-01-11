import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground font-mono flex items-center justify-center gap-2">
            Designed & Built with <Heart size={14} className="text-primary animate-pulse" /> by Rehankumar Chaudhari
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
