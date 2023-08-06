import Image from 'next/image';

import { classNames } from '@rheine/(utils)/classNames';


export function StorySection() {
  return (
    <article className={classNames(
      "relative p-8 space-y-4 lg:max-w-4xl lg:mx-auto",
      "font-display text-slate-800 text-2xl leading-tight tracking-wide"
    )}>
      <p className="first-letter:text-[48px]">
        Ursprünglich sollten im Herzen von Rheine in einem ausgedientem Squash Center neue Wohnräume entstehen  - doch es kam anders.
      </p>
      <p>
        Wie alle machten auch wir die lähmenden Erfahrungen der fast dreijährigen Covid 19-Pandemie mit ihren tiefgreifenden Einschränkungen im Privaten wie Beruflichen. Menschen interessieren sich für Menschen, wollen sich treffen, interagieren -
nicht digital und virtuell, sondern real und von Angesicht zu Angesicht. 
      </p>
      <div className="py-12">
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
          src="/business-owner.jpg"
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
        className="absolute top-20 rotate-3" />
      <h4 className="text-lg">Rhichard Rheine</h4>
      <h6 className="text-sm">Geschäftsführer</h6>
    </div>
  );
}
