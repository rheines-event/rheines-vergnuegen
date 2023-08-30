'use client'

import { PropsWithChildren, ReactNode, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { classNames } from '@rheine/(utils)/classNames';


type SectionMapProps = PropsWithChildren<{
  alt: string;
  caption?: ReactNode;
  align?: 'start' | 'end';
}>;
export function SectionMap({ children, caption, align = 'start' }: SectionMapProps) {
  return (
    <div className={classNames("lg:flex my-16 lg:my-24 -mx-4 lg:-mx-32", align === 'start' ? "lg:flex-row-reverse" : "lg:flex-row")}>
      {children}
      <figure className="relative w-9/12 sm:w-7/12 flex-shrink-0 flex-grow">
        <Map className="w-full aspect-square" />
        {caption && (
          <figcaption className={classNames(
            "font-sans py-1 text-sm",
            align === 'start' ? 'pl-4 text-end' : 'pr-4',
          )}>{caption}</figcaption>
        )}
      </figure>
    </div>
  );
}


export function Map({ className }: { className?: string }) {

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []); 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? ''
  });
  
  return !isLoaded ? null : (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={className}>
      <Marker position={center} />
    </GoogleMap>
  );
}
