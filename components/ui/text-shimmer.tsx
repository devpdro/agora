'use client';

import React, { useMemo, type JSX } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);

  const dynamicSpread = useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  const baseColor = '#ffffff';
  const gradientColor = '#c0c0c0';
  const stripeWidth = 80; // Largura da listra em pixels

  return (
    <MotionComponent
      className={cn(
        'relative inline-block',
        className
      )}
      animate={{
        backgroundPosition: ['0% center', '100% center', '0% center']
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
        times: [0, 0.5, 1],
      }}
      style={
        {
          backgroundImage: `linear-gradient(90deg, 
            ${baseColor} 0%, 
            ${baseColor} calc(50% - ${stripeWidth}px), 
            ${gradientColor} calc(50% - ${stripeWidth / 2}px), 
            ${gradientColor} calc(50% + ${stripeWidth / 2}px), 
            ${baseColor} calc(50% + ${stripeWidth}px), 
            ${baseColor} 100%
          )`,
          backgroundSize: '250% 100%',
          backgroundRepeat: 'no-repeat',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          overflow: 'visible',
          lineHeight: '1.2',
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

