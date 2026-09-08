import React, { useState } from 'react';
import { ImageMeta } from '../../types';
import { Maximize2, X, Info, Shield } from 'lucide-react';

interface ImageGalleryProps {
  images: {
    url: string;
    meta?: ImageMeta;
  }[];
  columns?: 2 | 3 | 4;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, columns = 3 }) => {
  const [activeImage, setActiveImage] = useState<{ url: string; meta?: ImageMeta } | null>(null);

  if (!images || images.length === 0) return null;

  const colClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  };

  return (
    <>
      <div className={`grid ${colClasses[columns]} gap-4 my-6`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveImage(img)}
            className="group relative bg-charcoal-900 border border-brass/30 rounded overflow-hidden cursor-pointer shadow-archival hover:border-brass transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-charcoal-950">
              <img
                src={img.url}
                alt={img.meta?.alt || 'Historical illustration'}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
            </div>
            
            {/* Overlay icon */}
            <div className="absolute top-2 right-2 p-1.5 rounded bg-charcoal-950/80 border border-brass/40 text-brass opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Caption strip */}
            {img.meta && (
              <div className="p-3 bg-charcoal-900 border-t border-brass/10">
                <div className="font-serif font-bold text-xs text-parchment line-clamp-1 group-hover:text-brass transition-colors">
                  {img.meta.title}
                </div>
                <div className="text-[11px] text-steel font-sans line-clamp-1 mt-0.5">
                  {img.meta.caption}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Fullscreen Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-charcoal-900 border border-brass/50 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-3 border-b border-brass/20 bg-charcoal-950">
              <div className="flex items-center gap-2 text-brass font-mono text-xs uppercase tracking-wider">
                <Shield className="w-4 h-4" />
                <span>Historical Museum Artifact &middot; Archival View</span>
              </div>
              <button 
                onClick={() => setActiveImage(null)}
                className="p-1 text-steel-light hover:text-parchment"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-auto flex-1 flex flex-col md:flex-row bg-black/60">
              <div className="flex-1 flex items-center justify-center p-4 min-h-[350px]">
                <img
                  src={activeImage.url}
                  alt={activeImage.meta?.alt || 'Archival image'}
                  className="max-h-[65vh] w-auto object-contain shadow-2xl rounded border border-brass/20"
                />
              </div>

              {/* Metadata Sidebar */}
              {activeImage.meta && (
                <div className="w-full md:w-80 p-5 bg-charcoal-950 border-t md:border-t-0 md:border-l border-brass/20 text-xs font-sans space-y-4">
                  <div>
                    <span className="font-mono text-[10px] text-brass uppercase tracking-widest block mb-1">Title</span>
                    <h4 className="font-serif text-sm font-bold text-parchment">{activeImage.meta.title}</h4>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-brass uppercase tracking-widest block mb-1">Historical Context</span>
                    <p className="text-steel-light leading-relaxed">{activeImage.meta.caption}</p>
                  </div>

                  {activeImage.meta.creator && (
                    <div>
                      <span className="font-mono text-[10px] text-brass uppercase tracking-widest block mb-0.5">Creator / Artist</span>
                      <span className="text-parchment font-medium">{activeImage.meta.creator}</span>
                    </div>
                  )}

                  {activeImage.meta.date && (
                    <div>
                      <span className="font-mono text-[10px] text-brass uppercase tracking-widest block mb-0.5">Period / Date</span>
                      <span className="text-parchment font-mono">{activeImage.meta.date}</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-brass/10 space-y-1 text-[11px] text-steel">
                    <div><span className="font-mono text-steel-light">Source:</span> {activeImage.meta.source}</div>
                    <div><span className="font-mono text-steel-light">License:</span> {activeImage.meta.license}</div>
                    <div><span className="font-mono text-steel-light">Credit:</span> {activeImage.meta.credit}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
