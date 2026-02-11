'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroGradientProps {
  pretitle?: string;
  title: string;
  description?: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  footerText?: string;
  children?: React.ReactNode;
  backgroundImage?: string;
}

export function HeroGradient({
  pretitle,
  title,
  description,
  subtitle,
  primaryAction,
  secondaryAction,
  footerText,
  children,
  backgroundImage,
}: HeroGradientProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Animated background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep black to charcoal gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        {/* Artistic gradient accent - subtle and elegant */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-neutral-800/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-neutral-700/30 to-transparent rounded-full blur-3xl" />

        {/* Additional depth layer */}
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Background image if provided */}
        {backgroundImage && (
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Pretitle */}
          {pretitle && (
            <div className="inline-block">
              <p className="text-sm sm:text-base font-semibold text-neutral-400 uppercase tracking-widest">
                {pretitle}
              </p>
            </div>
          )}

          {/* Main Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-tight">
            <span className="text-balance">{title}</span>
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* Description */}
          {description && (
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* Custom children content */}
          {children && <div className="py-4">{children}</div>}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            {primaryAction && (
              <Button
                onClick={primaryAction.onClick}
                asChild={!primaryAction.onClick}
                className="px-8 py-3 bg-white text-black hover:bg-neutral-100 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                {primaryAction.href ? (
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                ) : (
                  <span>{primaryAction.label}</span>
                )}
              </Button>
            )}
            {secondaryAction && (
              <Button
                onClick={secondaryAction.onClick}
                asChild={!secondaryAction.onClick}
                variant="outline"
                className="px-8 py-3 border border-neutral-600 text-white hover:bg-neutral-900 hover:border-neutral-500 font-semibold rounded-full transition-all duration-300 bg-transparent"
              >
                {secondaryAction.href ? (
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                ) : (
                  <span>{secondaryAction.label}</span>
                )}
              </Button>
            )}
          </div>

          {/* Footer text */}
          {footerText && (
            <div className="pt-12">
              <p className="text-xs sm:text-sm text-neutral-500 uppercase tracking-widest">
                {footerText}
              </p>
            </div>
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
