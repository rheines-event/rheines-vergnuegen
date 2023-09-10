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
        <div className={classNames("w-full p-4 pointer-events-none lg:p-8", className)}>
          <button className="pointer-events-auto" onClick={() => setNavigationOpen(true)}>
            <Logo mode={ghostMode ? 'white' : 'responsive'} />
          </button>
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
      setGhostMode(!(window.scrollY > window.innerHeight));
    } : null;
    return () => { window.onscroll = null; }
  }, [enabled]);

  return enabled ? { ghostMode } : {};
}