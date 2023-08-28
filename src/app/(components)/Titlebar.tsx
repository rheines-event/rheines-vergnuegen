'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

import { classNames } from '@rheine/(utils)/classNames';
import { Navigation } from './Navigation';
import { Logo } from './Logo';


export function Titlebar({ className }: { className?: string }) {

  const isHeroSection = usePathname() === '/';
  const { ghostMode = false } = useGhostMode(isHeroSection);

  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div>
      {!navigationOpen && (
        <div className={classNames("w-full h-16 p-4", className)}>
          <Logo
            mode={ghostMode ? 'white' : 'dark'}
            onClick={() => setNavigationOpen(true)} />
        </div> 
      )}
      <Navigation
        className="fixed inset-0 w-full h-screen"
        opened={navigationOpen}
        onClose={() => setNavigationOpen(false)} />
    </div>
  );
}


function useGhostMode(enabled: boolean): { ghostMode?: boolean } {
  const [ghostMode, setGhostMode] = useState(true);

  useEffect(() => {
    window.onscroll = enabled ? () => {
      setGhostMode(!(window.scrollY > window.screen.height));
    } : null;
    return () => { window.onscroll = null; }
  }, [enabled]);

  return enabled ? { ghostMode } : {};
}