import { ReactNode } from 'react';

import Image from 'next/image';

import { classNames } from '@rheine/(utils)/classNames';


type SectionImageProps = {
  src: string;
  align?: 'start' | 'end';
} & (
  { alt: string; caption?: ReactNode; } |
  { alt?: string; caption: string; }
);
export function SectionImage({ src, alt, caption, align = 'start' }: SectionImageProps) {
  return (
    <div className="w-full h-80 my-8 overflow-hidden">
      <figure className={classNames("absolute w-80", align === 'start' ? '-left-px' : '-right-px')}>
        <div className="relative aspect-square">
          <Image
            fill
            src={src}
            alt={alt ?? caption as string}
            sizes="(max-width: 640px) 100vw, 320px"
            priority={false}
            loading="lazy"
            className="object-cover" />
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
