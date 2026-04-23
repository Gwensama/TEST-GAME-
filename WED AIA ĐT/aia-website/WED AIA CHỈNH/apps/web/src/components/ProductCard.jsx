
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

function ProductCard({ icon: Icon, title, description, link }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group relative bg-card rounded-2xl p-8 shadow-soft transition-all duration-300 hover:shadow-hover border border-border/50 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
        {description}
      </p>
      <Link 
        to={link}
        className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors duration-300 mt-auto"
      >
        Xem chi tiết
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </motion.div>
  );
}

export default ProductCard;
