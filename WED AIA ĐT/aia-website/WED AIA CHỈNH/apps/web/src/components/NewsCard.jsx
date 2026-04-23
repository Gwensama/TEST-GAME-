
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function NewsCard({ image, title, date, excerpt, link }) {
  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:shadow-hover border border-border/50 flex flex-col h-full hover:-translate-y-2">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-sm text-primary mb-4 font-medium">
          <Calendar className="w-4 h-4" />
          <time>{date}</time>
        </div>
        <h3 className="text-xl font-display font-semibold mb-3 text-foreground leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-auto">
          <Link 
            to={link}
            className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors duration-300"
          >
            Đọc thêm
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
