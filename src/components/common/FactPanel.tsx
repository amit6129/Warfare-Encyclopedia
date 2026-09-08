import React from 'react';

interface FactItem {
  label: string;
  value: React.ReactNode;
  highlight?: boolean;
}

interface FactPanelProps {
  title?: string;
  items: FactItem[];
  className?: string;
}

export const FactPanel: React.FC<FactPanelProps> = ({ 
  title = "Archival Record Summary", 
  items, 
  className = "" 
}) => {
  return (
    <div className={`card-archival rounded-lg p-5 border-l-4 border-l-brass ${className}`}>
      {title && (
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-brass/20">
          <h3 className="font-mono text-xs uppercase tracking-widest text-brass font-bold flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brass rounded-full"></span>
            {title}
          </h3>
          <span className="text-[10px] font-mono text-steel uppercase">Verified Dispatch</span>
        </div>
      )}
      
      <div className="space-y-2.5">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className="flex flex-col sm:flex-row sm:items-baseline justify-between py-1.5 border-b border-border-color/40 last:border-b-0 text-xs"
          >
            <span className="font-mono text-steel uppercase tracking-wider text-[11px] sm:w-1/3 flex-shrink-0">
              {item.label}
            </span>
            <span className={`font-serif sm:w-2/3 text-left sm:text-right ${
              item.highlight ? 'text-brass font-bold' : 'text-parchment font-medium'
            }`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
