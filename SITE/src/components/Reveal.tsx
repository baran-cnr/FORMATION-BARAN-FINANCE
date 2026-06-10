
import React from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;
