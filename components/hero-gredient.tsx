'use client';

import React from 'react';

interface HeroGradientProps {
  title: string;
  description?: string;
}

export function HeroGradient({
  title,
  description,
}: HeroGradientProps) {
  return (
    <div className="relative py-12 md:py-16 lg:py-32 px-6 md:px-8 lg:px-10 w-full min-h-screen overflow-hidden bg-black">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep black to charcoal gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        {/* Artistic gradient accent - subtle and elegant */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-neutral-800/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-neutral-700/30 to-transparent rounded-full blur-3xl" />

        {/* Additional depth layer */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            <span className="text-balance">{title}</span>
          </h1>

          {/* Description */}
          {description && (
            <p className="text-lg text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Scroll indicator - optional */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border border-neutral-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-neutral-400 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
}
