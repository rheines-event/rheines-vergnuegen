import { ReactNode, useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { classNames } from '@rheine/(utils)/classNames';


type SectionMapProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  align?: 'start' | 'end';
};
export function SectionMap({ caption, align = 'start' }: SectionMapProps) {
  return (
    <div className="w-full h-80 my-8">
      <figure className={classNames("absolute", align === 'start' ? '-left-px' : '-right-px')}>
        <div className="relative h-80 aspect-square">
          <Map />
        </div>
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


function Map() {

  const center = useMemo(() => ({ lat: 44, lng: -80 }), []); 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });
  
  return !isLoaded ? null : (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="w-full h-full">
      <Marker position={center} />
    </GoogleMap>
  );
}
