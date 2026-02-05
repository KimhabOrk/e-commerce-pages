'use client'

import React from 'react'

interface FeatureCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  ctaText: string
  ctaHref: string
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  ctaText,
  ctaHref,
  className = '',
}: FeatureCardProps) {
  return (
    <a
      href={ctaHref}
      className={`group flex flex-col items-center text-center bg-card/80 rounded-lg border border-border/40 p-8 md:p-10 hover:border-primary/40 hover:shadow-md transition-all duration-300 ${className}`}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-6 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3 uppercase tracking-wide text-balance">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-foreground/70 mb-6 leading-relaxed flex-grow text-balance">
        {description}
      </p>

      {/* CTA */}
      <span className="inline-flex items-center text-primary font-semibold text-sm md:text-base group-hover:gap-2 transition-all gap-1">
        {ctaText}
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </a>
  )
}
