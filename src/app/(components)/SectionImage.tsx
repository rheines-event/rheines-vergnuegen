import { ReactNode } from 'react';

import Image from 'next/image';

import { classNames } from '@rheine/(utils)/classNames';


type SectionImageProps = {
  src: string;
  align?: 'start' | 'end';
  className?: string;
} & (
  { alt: string; caption?: ReactNode; } |
  { alt?: string; caption: string; }
);
export function SectionImage({ src, alt, caption, align = 'start', className }: SectionImageProps) {
  return (
    <div className={`${className} relative w-full my-8 md:my-16 lg:my-24`}>
      <figure className={classNames("w-9/12 sm:w-7/12", align === 'start' ? '-ml-4 lg:-ml-32' : 'ml-auto -mr-4 lg:-mr-32')}>
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
