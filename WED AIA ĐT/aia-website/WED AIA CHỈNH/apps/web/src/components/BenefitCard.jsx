
import React from 'react';

function BenefitCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl p-8 bg-muted hover:bg-card transition-all duration-300 hover:shadow-soft text-center flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors duration-300">
        <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default BenefitCard;
