import Image from 'next/image';

import { classNames } from '@rheine/(utils)/classNames';


export function StorySection() {
  return (
    <article className={classNames(
      "relative px-8 py-16 space-y-4 lg:pt-32 lg:max-w-4xl lg:mx-auto",
      "font-display text-2xl leading-tight tracking-wide"
    )}>

      <p className="mb-2 first-letter:text-[48px]">Wir sind die Rheines-Event GmbH.</p>
      <p>
        Ein junges Unternehmen mit dem ehrgeizigen Ziel,
        Menschen, ihren Ideen und ihrem Miteinander zeitgemäße Räume zu bieten.
        Wir schaffen Platz für Gestalter, Gespräche & Genuss in stilvollem Ambiente, in dem Geschäftliches 
        wie auch Privates einen neuen ansprechenden Rahmen bekommen.   
      </p>

      <div className="py-12 lg:py-32">
        <BusinessOwnerSignature />
      </div>
    </article>
  );
}

function BusinessOwnerSignature() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="relative w-32 h-32 mb-3 rounded-full overflow-hidden">
        <Image
          src="/business-owner.png"
          alt="Business Owner"
          fill
          sizes="(max-width: 640px) 256px, 128px"
          className="object-cover" />
      </div>
      <Image
        src="/signature.svg"
        alt="Business Owner Signature"
        height={240}
        width={240}
        className="absolute top-20 -rotate-3" />
      <h4 className="text-lg dark:text-white">Robert Graefe</h4>
      <h6 className="text-sm">Geschäftsführer</h6>
    </div>
  );
}
