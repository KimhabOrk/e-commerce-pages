'use client';

import React from 'react';
import { AnimatedShinyText } from "@/components/animated-shiny-text-1";

interface HeroGradientProps {
  title: string;
  description?: string;
}

export function HeroGradient({
  title,
  description,
}: HeroGradientProps) {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          {/* Main Title */}
          <h1 className="font-serif text-3xl text-balance md:text-4xl lg:text-6xl font-semibold">
            <AnimatedShinyText variant="rainbow">
            	{title}
            </AnimatedShinyText>
          </h1>

          {/* Description */}
          {description && (
            <p className="md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
